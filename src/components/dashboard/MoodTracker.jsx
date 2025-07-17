import React, { useState, useEffect } from 'react'
import { useApp } from '../../contexts/AppContext'
import { useAuth } from '../../contexts/AuthContext'
import { updateMoodTracking, getMoodHistory } from '../../lib/supabase'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'
import toast from 'react-hot-toast'

const { FiHeart, FiSmile, FiMeh, FiFrown } = FiIcons

const MoodTracker = () => {
  const { stressLevel, updateStressLevel } = useApp()
  const { user } = useAuth()
  const [showMoodCheck, setShowMoodCheck] = useState(false)
  const [moodHistory, setMoodHistory] = useState([])
  const [currentMood, setCurrentMood] = useState({
    stress: stressLevel,
    overwhelm: 5,
    confidence: 7
  })

  useEffect(() => {
    if (user) {
      loadMoodHistory()
    }
  }, [user])

  const loadMoodHistory = async () => {
    try {
      const history = await getMoodHistory(user.id, 7) // Last 7 entries
      setMoodHistory(history)
      
      // Update current stress level from latest mood entry
      if (history.length > 0) {
        const latestMood = history[0]
        updateStressLevel(latestMood.stress_level)
        setCurrentMood(prev => ({
          ...prev,
          stress: latestMood.stress_level
        }))
      }
    } catch (error) {
      console.error('Error loading mood history:', error)
    }
  }

  const handleMoodSubmit = async () => {
    if (!user) return

    try {
      await updateMoodTracking({
        user_id: user.id,
        stress_level: currentMood.stress,
        overwhelm_level: currentMood.overwhelm,
        confidence_level: currentMood.confidence,
        planning_stage: 'active',
        check_in_date: new Date().toISOString().split('T')[0]
      })

      updateStressLevel(currentMood.stress)
      setShowMoodCheck(false)
      await loadMoodHistory() // Refresh mood history
      toast.success('Mood check-in saved!')
    } catch (error) {
      console.error('Error saving mood:', error)
      toast.error('Failed to save mood check-in')
    }
  }

  const getMoodIcon = (level) => {
    if (level >= 8) return FiSmile
    if (level >= 6) return FiMeh
    return FiFrown
  }

  const getMoodColor = (level) => {
    if (level >= 8) return 'text-green-500'
    if (level >= 6) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStressColor = (level) => {
    if (level <= 3) return 'text-green-500'
    if (level <= 6) return 'text-yellow-500'
    return 'text-red-500'
  }

  const getStressLabel = (level) => {
    if (level <= 3) return 'Low'
    if (level <= 6) return 'Moderate'
    return 'High'
  }

  const shouldShowMoodCheck = () => {
    if (!moodHistory.length) return true
    
    const lastCheckIn = new Date(moodHistory[0].check_in_date)
    const today = new Date()
    const daysDiff = Math.floor((today - lastCheckIn) / (1000 * 60 * 60 * 24))
    
    return daysDiff >= 1 // Show if last check-in was 1+ days ago
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-nunito font-semibold text-gray-800">
          Mood Check-in
        </h3>
        <SafeIcon icon={FiHeart} className="text-rose-400" />
      </div>

      {!showMoodCheck ? (
        <div className="space-y-4">
          <div className="text-center">
            <div className={`text-3xl mb-2 ${getStressColor(currentMood.stress)}`}>
              <SafeIcon icon={getMoodIcon(10 - currentMood.stress)} className="mx-auto" />
            </div>
            <p className="text-sm text-gray-600 mb-1">
              Current stress level: {currentMood.stress}/10
            </p>
            <p className="text-xs text-gray-500">
              {getStressLabel(currentMood.stress)} stress
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Stress Level</span>
              <span className={`font-medium ${getStressColor(currentMood.stress)}`}>
                {getStressLabel(currentMood.stress)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentMood.stress <= 3 ? 'bg-green-500' : 
                  currentMood.stress <= 6 ? 'bg-yellow-500' : 'bg-red-500'
                }`}
                style={{ width: `${(currentMood.stress / 10) * 100}%` }}
              />
            </div>
          </div>

          {/* Mood History Trend */}
          {moodHistory.length > 1 && (
            <div className="pt-3 border-t border-gray-200">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Recent Trend</h4>
              <div className="flex items-center space-x-1">
                {moodHistory.slice(0, 7).reverse().map((mood, index) => (
                  <div
                    key={index}
                    className={`w-2 h-6 rounded-sm ${
                      mood.stress_level <= 3 ? 'bg-green-400' :
                      mood.stress_level <= 6 ? 'bg-yellow-400' : 'bg-red-400'
                    }`}
                    title={`${mood.check_in_date}: ${mood.stress_level}/10`}
                  />
                ))}
              </div>
            </div>
          )}

          {shouldShowMoodCheck() && (
            <button
              onClick={() => setShowMoodCheck(true)}
              className="w-full py-2 px-4 bg-sage-100 text-sage-700 rounded-lg hover:bg-sage-200 transition-colors text-sm font-medium"
            >
              Update Mood Check-in
            </button>
          )}

          <div className="text-xs text-gray-500 text-center">
            {shouldShowMoodCheck() 
              ? 'Daily check-ins help us provide better support'
              : 'Next check-in available tomorrow'
            }
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stress Level: {currentMood.stress}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentMood.stress}
              onChange={(e) => setCurrentMood(prev => ({ ...prev, stress: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Calm</span>
              <span>Stressed</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Overwhelm Level: {currentMood.overwhelm}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentMood.overwhelm}
              onChange={(e) => setCurrentMood(prev => ({ ...prev, overwhelm: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>In control</span>
              <span>Overwhelmed</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Confidence Level: {currentMood.confidence}/10
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={currentMood.confidence}
              onChange={(e) => setCurrentMood(prev => ({ ...prev, confidence: parseInt(e.target.value) }))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Uncertain</span>
              <span>Confident</span>
            </div>
          </div>

          <div className="flex space-x-2">
            <button
              onClick={() => setShowMoodCheck(false)}
              className="flex-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm"
            >
              Cancel
            </button>
            <button
              onClick={handleMoodSubmit}
              className="flex-1 py-2 px-3 bg-sage-500 text-white rounded-lg hover:bg-sage-600 transition-colors text-sm"
            >
              Save
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default MoodTracker