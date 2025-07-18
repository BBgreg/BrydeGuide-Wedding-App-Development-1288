import React, { useEffect, useState } from 'react'
import { useApp } from '../../contexts/AppContext'
import { useCuration } from '../../hooks/useCuration'
import { saveUserDecision } from '../../lib/supabase'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import VendorCard from './VendorCard'
import DecisionTimer from '../dashboard/DecisionTimer'
import ConfidenceModal from './ConfidenceModal'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'
import toast from 'react-hot-toast'

const { FiRefreshCw, FiArrowRight } = FiIcons

const VendorCuration = () => {
  const { currentCategory, addDecision, getNextCategory, stopTimer, setCurrentCategory } = useApp()
  const { vendors, loading, error, curateVendors } = useCuration()
  const { user } = useAuth()
  const [savedVendors, setSavedVendors] = useState(new Set())
  const [rejectedVendors, setRejectedVendors] = useState(new Set())
  const [showConfidenceModal, setShowConfidenceModal] = useState(false)
  const [selectedVendor, setSelectedVendor] = useState(null)

  useEffect(() => {
    if (currentCategory && user) {
      curateVendors(currentCategory)
    }
  }, [currentCategory, curateVendors, user])

  const handleSaveVendor = (vendor) => {
    setSavedVendors(prev => new Set([...prev, vendor.id]))
    setSelectedVendor(vendor)
    setShowConfidenceModal(true)
    toast.success(`${vendor.business_name} saved!`)
  }

  const handleRejectVendor = (vendor) => {
    setRejectedVendors(prev => new Set([...prev, vendor.id]))
    toast.success(`${vendor.business_name} removed from consideration`)
  }

  const handleContactVendor = (vendor) => {
    // Copy contact information to clipboard
    const contactInfo = `${vendor.business_name}\nEmail: ${vendor.contact_email}\nPhone: ${vendor.contact_phone}`
    navigator.clipboard.writeText(contactInfo).then(() => {
      toast.success(`Contact info for ${vendor.business_name} copied to clipboard!`)
    }).catch(() => {
      toast.success(`Contact ${vendor.business_name} at ${vendor.contact_email}`)
    })
  }

  const handleConfidenceSubmit = async (confidenceScore, notes) => {
    if (!selectedVendor || !user) return

    try {
      const decisionData = {
        user_id: user.id,
        category: currentCategory,
        presented_vendors: vendors.map(v => v.id),
        selected_vendor: selectedVendor.id,
        rejected_vendors: Array.from(rejectedVendors),
        confidence_score: confidenceScore,
        decision_notes: notes,
        decision_date: new Date().toISOString(),
        time_to_decide: '00:00:00', // This would be calculated properly
        category_order: getCurrentCategoryOrder()
      }

      await saveUserDecision(decisionData)
      addDecision(decisionData)
      stopTimer()
      
      setShowConfidenceModal(false)
      setSavedVendors(new Set())
      setRejectedVendors(new Set())
      
      toast.success('Decision saved successfully!')

      // Move to next category
      const nextCategory = getNextCategory()
      if (nextCategory) {
        setTimeout(() => {
          setCurrentCategory(nextCategory)
          toast.success(`Moving to ${nextCategory} selection!`)
        }, 1000)
      } else {
        toast.success('🎉 Congratulations! All categories completed!')
      }
    } catch (error) {
      console.error('Error saving decision:', error)
      toast.error('Failed to save decision. Please try again.')
    }
  }

  const getCurrentCategoryOrder = () => {
    const categories = ['wedding_planner', 'venue', 'photography', 'videography', 'catering', 'dj', 'lighting', 'photo_booth', 'florist', 'music', 'cake', 'transportation', 'officiant']
    return categories.indexOf(currentCategory) + 1
  }

  const handleRecurate = () => {
    setSavedVendors(new Set())
    setRejectedVendors(new Set())
    curateVendors(currentCategory)
    toast.success('Getting new vendor options...')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Finding your perfect vendors...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
        <p className="text-red-800 mb-4">Error loading vendors: {error}</p>
        <button
          onClick={handleRecurate}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <DecisionTimer />
      
      {/* Category Header */}
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold text-gray-800 mb-2">
          {currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1).replace('_', ' ')} Options
        </h2>
        <p className="text-gray-600">
          We've curated exactly 3 vendors that match your preferences and budget
        </p>
      </div>

      {/* Vendor Cards */}
      {vendors.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {vendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              onSave={handleSaveVendor}
              onReject={handleRejectVendor}
              onContact={handleContactVendor}
              saved={savedVendors.has(vendor.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-600 mb-4">No vendors found for this category</p>
          <button
            onClick={handleRecurate}
            className="bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors"
          >
            <SafeIcon icon={FiRefreshCw} className="inline mr-2" />
            Try Different Criteria
          </button>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4">
        <button
          onClick={handleRecurate}
          className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <SafeIcon icon={FiRefreshCw} className="mr-2" />
          Get New Options
        </button>
        
        {savedVendors.size > 0 && (
          <button
            onClick={() => setShowConfidenceModal(true)}
            className="flex items-center px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
          >
            Continue to Next Category
            <SafeIcon icon={FiArrowRight} className="ml-2" />
          </button>
        )}
      </div>

      {/* Confidence Modal */}
      {showConfidenceModal && selectedVendor && (
        <ConfidenceModal
          vendor={selectedVendor}
          onSubmit={handleConfidenceSubmit}
          onClose={() => setShowConfidenceModal(false)}
        />
      )}
    </div>
  )
}

export default VendorCuration