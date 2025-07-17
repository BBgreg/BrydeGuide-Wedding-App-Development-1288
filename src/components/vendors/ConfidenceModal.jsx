import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiX, FiHeart } = FiIcons

const ConfidenceModal = ({ vendor, onSubmit, onClose }) => {
  const [confidence, setConfidence] = useState(7)
  const [notes, setNotes] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(confidence, notes)
  }

  const getConfidenceColor = (score) => {
    if (score >= 8) return 'text-green-600'
    if (score >= 6) return 'text-yellow-600'
    return 'text-red-600'
  }

  const getConfidenceLabel = (score) => {
    if (score >= 9) return 'Extremely Confident'
    if (score >= 8) return 'Very Confident'
    if (score >= 7) return 'Confident'
    if (score >= 6) return 'Somewhat Confident'
    if (score >= 5) return 'Neutral'
    if (score >= 4) return 'Somewhat Uncertain'
    if (score >= 3) return 'Uncertain'
    if (score >= 2) return 'Very Uncertain'
    return 'Extremely Uncertain'
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-nunito font-semibold text-gray-800">
            How confident are you?
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <SafeIcon icon={FiX} className="text-xl" />
          </button>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-3">
            <SafeIcon icon={FiHeart} className="text-rose-400 mr-2" />
            <span className="font-medium text-gray-700">
              {vendor.business_name}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            Let us know how confident you feel about this choice. This helps us improve future recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Confidence Level: {confidence}/10
            </label>
            
            <div className="mb-3">
              <input
                type="range"
                min="1"
                max="10"
                value={confidence}
                onChange={(e) => setConfidence(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #ef4444 0%, #f59e0b 50%, #10b981 100%)`
                }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-gray-500 mb-2">
              <span>Not confident</span>
              <span>Very confident</span>
            </div>
            
            <div className={`text-center font-medium ${getConfidenceColor(confidence)}`}>
              {getConfidenceLabel(confidence)}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
              Notes (optional)
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-sage-500 resize-none"
              placeholder="What made this decision easy or difficult for you?"
            />
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2 px-4 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-2 px-4 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors"
            >
              Save Decision
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  )
}

export default ConfidenceModal