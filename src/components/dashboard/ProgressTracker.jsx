import React from 'react'
import { useApp } from '../../contexts/AppContext'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiCheck, FiClock, FiTrendingUp } = FiIcons

const ProgressTracker = () => {
  const { categories, overallProgress, confidenceScores } = useApp()

  const completedCategories = categories.filter(cat => cat.completed)
  const averageConfidence = Object.values(confidenceScores).length > 0
    ? Object.values(confidenceScores).reduce((a, b) => a + b, 0) / Object.values(confidenceScores).length
    : 0

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-nunito font-semibold text-gray-800">
          Planning Progress
        </h2>
        <div className="flex items-center space-x-2 text-sage-600">
          <SafeIcon icon={FiTrendingUp} />
          <span className="font-medium">{Math.round(overallProgress)}% Complete</span>
        </div>
      </div>

      {/* Overall Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Overall Progress</span>
          <span>{completedCategories.length} of {categories.length} categories</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${overallProgress}%` }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-sage-400 to-sage-500 h-3 rounded-full"
          />
        </div>
      </div>

      {/* Category Status Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`
              p-3 rounded-lg border-2 text-center
              ${category.completed 
                ? 'bg-green-50 border-green-200' 
                : 'bg-gray-50 border-gray-200'
              }
            `}
          >
            <div className="text-lg mb-1">{category.icon}</div>
            <div className="text-xs font-medium text-gray-700 mb-1">
              {category.name}
            </div>
            <div className="flex items-center justify-center">
              {category.completed ? (
                <div className="flex items-center text-green-600">
                  <SafeIcon icon={FiCheck} className="text-xs mr-1" />
                  <span className="text-xs">Done</span>
                </div>
              ) : (
                <div className="flex items-center text-gray-500">
                  <SafeIcon icon={FiClock} className="text-xs mr-1" />
                  <span className="text-xs">Pending</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <div className="text-2xl font-bold text-sage-600">
            {completedCategories.length}
          </div>
          <div className="text-xs text-gray-600">Completed</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600">
            {categories.length - completedCategories.length}
          </div>
          <div className="text-xs text-gray-600">Remaining</div>
        </div>
        
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600">
            {averageConfidence > 0 ? averageConfidence.toFixed(1) : '—'}
          </div>
          <div className="text-xs text-gray-600">Avg Confidence</div>
        </div>
      </div>
    </div>
  )
}

export default ProgressTracker