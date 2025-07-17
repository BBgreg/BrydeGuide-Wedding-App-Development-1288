import React from 'react'
import { useTimer } from '../../hooks/useTimer'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiClock, FiAlertTriangle } = FiIcons

const DecisionTimer = () => {
  const { timeRemaining, isExpired, formatTime, getTimeColor, getUrgencyLevel, isActive } = useTimer()

  if (!isActive && !isExpired) return null

  const urgencyLevel = getUrgencyLevel(timeRemaining)
  const timeColor = getTimeColor(timeRemaining)

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        rounded-lg p-4 border-2 mb-6
        ${urgencyLevel === 'critical' ? 'bg-red-50 border-red-200' : ''}
        ${urgencyLevel === 'urgent' ? 'bg-orange-50 border-orange-200' : ''}
        ${urgencyLevel === 'moderate' ? 'bg-yellow-50 border-yellow-200' : ''}
        ${urgencyLevel === 'normal' ? 'bg-sage-50 border-sage-200' : ''}
        ${isExpired ? 'bg-gray-50 border-gray-200' : ''}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className={`
            p-2 rounded-full
            ${urgencyLevel === 'critical' ? 'bg-red-100' : ''}
            ${urgencyLevel === 'urgent' ? 'bg-orange-100' : ''}
            ${urgencyLevel === 'moderate' ? 'bg-yellow-100' : ''}
            ${urgencyLevel === 'normal' ? 'bg-sage-100' : ''}
            ${isExpired ? 'bg-gray-100' : ''}
          `}>
            <SafeIcon 
              icon={urgencyLevel === 'critical' ? FiAlertTriangle : FiClock} 
              className={`${timeColor} text-lg`}
            />
          </div>
          
          <div>
            <h3 className="font-medium text-gray-800">
              {isExpired ? 'Decision Time Expired' : 'Decision Timer'}
            </h3>
            <p className="text-sm text-gray-600">
              {isExpired 
                ? 'You can still make a decision or request an extension'
                : 'Make your choice within the time limit'
              }
            </p>
          </div>
        </div>

        <div className="text-right">
          <div className={`text-2xl font-mono font-bold ${timeColor}`}>
            {isExpired ? '00:00:00' : formatTime(timeRemaining)}
          </div>
          {urgencyLevel === 'critical' && !isExpired && (
            <motion.div
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="text-xs text-red-600 font-medium mt-1"
            >
              URGENT
            </motion.div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      {!isExpired && timeRemaining && (
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className={`
                h-2 rounded-full transition-all duration-1000
                ${urgencyLevel === 'critical' ? 'bg-red-500' : ''}
                ${urgencyLevel === 'urgent' ? 'bg-orange-500' : ''}
                ${urgencyLevel === 'moderate' ? 'bg-yellow-500' : ''}
                ${urgencyLevel === 'normal' ? 'bg-sage-500' : ''}
              `}
              style={{ 
                width: `${Math.max(0, Math.min(100, (timeRemaining.totalMs / (24 * 60 * 60 * 1000)) * 100))}%` 
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default DecisionTimer