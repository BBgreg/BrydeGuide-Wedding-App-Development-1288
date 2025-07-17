import { useState, useCallback } from 'react'
import { getVendorsByCategory, createCurationSession } from '../lib/supabase'
import { useAuth } from '../contexts/AuthContext'
import { useApp } from '../contexts/AppContext'

export const useCuration = () => {
  const [loading, setLoading] = useState(false)
  const [vendors, setVendors] = useState([])
  const [error, setError] = useState(null)
  const { user, userProfile } = useAuth()
  const { setCurrentSession, startTimer } = useApp()

  const curateVendors = useCallback(async (category) => {
    if (!user || !userProfile) {
      setError('User not authenticated or profile not loaded')
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Get all vendors for category with filters
      const allVendors = await getVendorsByCategory(category, {
        maxDistance: 50, // Milwaukee area
        minCapacity: userProfile.guest_count_estimate ? userProfile.guest_count_estimate * 0.8 : 0,
        maxCapacity: userProfile.guest_count_estimate ? userProfile.guest_count_estimate * 1.2 : 1000
      })

      if (!allVendors || allVendors.length === 0) {
        setError('No vendors found for this category')
        return
      }

      // Apply AI curation algorithm
      const curatedVendors = applyCurationAlgorithm(allVendors, userProfile)
      
      // Create curation session
      const sessionData = {
        user_id: user.id,
        category,
        curated_vendors: curatedVendors.map(v => v.id),
        curation_criteria: {
          budget_range: getBudgetRange(userProfile, category),
          style_preference: userProfile.style_preference || 'classic',
          guest_count: userProfile.guest_count_estimate || 100,
          location_preference: 'Milwaukee'
        },
        timer_expires: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
      }

      const session = await createCurationSession(sessionData)
      
      setVendors(curatedVendors)
      setCurrentSession(session)
      startTimer(session.timer_expires)
      
    } catch (err) {
      console.error('Curation error:', err)
      setError(err.message || 'Failed to curate vendors')
    } finally {
      setLoading(false)
    }
  }, [user, userProfile, setCurrentSession, startTimer])

  return {
    vendors,
    loading,
    error,
    curateVendors
  }
}

// AI Curation Algorithm
const applyCurationAlgorithm = (vendors, userProfile) => {
  if (vendors.length <= 3) return vendors

  // Score each vendor
  const scoredVendors = vendors.map(vendor => ({
    ...vendor,
    score: calculateVendorScore(vendor, userProfile)
  }))

  // Sort by score
  scoredVendors.sort((a, b) => b.score - a.score)

  // Apply diversity optimization
  const curatedVendors = selectDiverseVendors(scoredVendors, userProfile)

  return curatedVendors.slice(0, 3)
}

const calculateVendorScore = (vendor, userProfile) => {
  let score = 0

  // Location compatibility (30% weight)
  const locationScore = Math.max(0, 100 - (vendor.distance_from_milwaukee * 2))
  score += locationScore * 0.3

  // Budget alignment (25% weight)
  const budgetRange = getBudgetRange(userProfile, vendor.category)
  const budgetScore = calculateBudgetScore(vendor, budgetRange)
  score += budgetScore * 0.25

  // Style preference match (25% weight)
  const styleScore = calculateStyleScore(vendor, userProfile.style_preference)
  score += styleScore * 0.25

  // Availability & logistics (20% weight)
  const availabilityScore = calculateAvailabilityScore(vendor, userProfile)
  score += availabilityScore * 0.2

  return score
}

const getBudgetRange = (userProfile, category) => {
  const totalBudget = userProfile.budget_total || 30000
  const categoryAllocations = {
    venue: 0.40,
    photography: 0.12,
    catering: 0.28,
    florist: 0.08,
    music: 0.08,
    cake: 0.04,
    transportation: 0.03,
    officiant: 0.02
  }

  const allocation = categoryAllocations[category] || 0.1
  const categoryBudget = totalBudget * allocation

  return {
    min: categoryBudget * 0.7,
    max: categoryBudget * 1.3
  }
}

const calculateBudgetScore = (vendor, budgetRange) => {
  const vendorAvgPrice = (vendor.price_minimum + vendor.price_maximum) / 2
  const budgetMidpoint = (budgetRange.min + budgetRange.max) / 2

  if (vendorAvgPrice >= budgetRange.min && vendorAvgPrice <= budgetRange.max) {
    return 100
  }

  const distance = Math.abs(vendorAvgPrice - budgetMidpoint)
  const maxDistance = budgetMidpoint
  
  return Math.max(0, 100 - (distance / maxDistance) * 100)
}

const calculateStyleScore = (vendor, stylePreference) => {
  if (!vendor.style_tags || !stylePreference) return 50

  const hasMatchingStyle = vendor.style_tags.some(tag => 
    tag.toLowerCase().includes(stylePreference.toLowerCase())
  )

  return hasMatchingStyle ? 100 : 30
}

const calculateAvailabilityScore = (vendor, userProfile) => {
  // Basic availability score - in real implementation, check actual availability
  let score = 80

  // Check capacity alignment
  if (userProfile.guest_count_estimate) {
    const guestCount = userProfile.guest_count_estimate
    if (vendor.capacity_minimum && vendor.capacity_maximum) {
      if (guestCount >= vendor.capacity_minimum && guestCount <= vendor.capacity_maximum) {
        score += 20
      } else {
        score -= 30
      }
    }
  }

  return Math.max(0, Math.min(100, score))
}

const selectDiverseVendors = (scoredVendors, userProfile) => {
  const selected = []
  const budgetRange = getBudgetRange(userProfile, scoredVendors[0]?.category)

  // Select one vendor from each price tier
  const lowBudget = scoredVendors.filter(v => v.price_maximum <= budgetRange.min * 1.2)
  const midBudget = scoredVendors.filter(v => 
    v.price_minimum <= budgetRange.max && v.price_maximum >= budgetRange.min
  )
  const highBudget = scoredVendors.filter(v => v.price_minimum >= budgetRange.max * 0.8)

  if (lowBudget.length > 0) selected.push(lowBudget[0])
  if (midBudget.length > 0 && selected.length < 3) {
    const midOption = midBudget.find(v => !selected.includes(v))
    if (midOption) selected.push(midOption)
  }
  if (highBudget.length > 0 && selected.length < 3) {
    const highOption = highBudget.find(v => !selected.includes(v))
    if (highOption) selected.push(highOption)
  }

  // Fill remaining slots with highest scored vendors
  while (selected.length < 3 && selected.length < scoredVendors.length) {
    const nextVendor = scoredVendors.find(v => !selected.includes(v))
    if (nextVendor) selected.push(nextVendor)
  }

  return selected
}