import { useState, useEffect, useCallback } from 'react'
import { useApp } from '../contexts/AppContext'

export const useTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(null)
  const [isExpired, setIsExpired] = useState(false)
  const { timerActive, timerExpires, stopTimer } = useApp()

  const calculateTimeRemaining = useCallback(() => {
    if (!timerExpires) return null

    const now = new Date()
    const expiry = new Date(timerExpires)
    const diff = expiry - now

    if (diff <= 0) {
      setIsExpired(true)
      stopTimer()
      return null
    }

    const hours = Math.floor(diff / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { hours, minutes, seconds, totalMs: diff }
  }, [timerExpires, stopTimer])

  useEffect(() => {
    if (!timerActive || !timerExpires) {
      setTimeRemaining(null)
      return
    }

    const updateTimer = () => {
      const remaining = calculateTimeRemaining()
      setTimeRemaining(remaining)
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)

    return () => clearInterval(interval)
  }, [timerActive, timerExpires, calculateTimeRemaining])

  const formatTime = (time) => {
    if (!time) return '00:00:00'
    
    const pad = (num) => num.toString().padStart(2, '0')
    return `${pad(time.hours)}:${pad(time.minutes)}:${pad(time.seconds)}`
  }

  const getTimeColor = (time) => {
    if (!time) return 'text-gray-500'
    
    const totalHours = time.totalMs / (1000 * 60 * 60)
    
    if (totalHours <= 1) return 'text-red-500'
    if (totalHours <= 4) return 'text-orange-500'
    if (totalHours <= 12) return 'text-yellow-500'
    return 'text-sage-500'
  }

  const getUrgencyLevel = (time) => {
    if (!time) return 'none'
    
    const totalHours = time.totalMs / (1000 * 60 * 60)
    
    if (totalHours <= 1) return 'critical'
    if (totalHours <= 4) return 'urgent'
    if (totalHours <= 12) return 'moderate'
    return 'normal'
  }

  return {
    timeRemaining,
    isExpired,
    formatTime,
    getTimeColor,
    getUrgencyLevel,
    isActive: timerActive
  }
}