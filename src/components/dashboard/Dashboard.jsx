import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import CategoryNavigation from './CategoryNavigation'
import VendorCuration from '../vendors/VendorCuration'
import ProgressTracker from './ProgressTracker'
import MoodTracker from './MoodTracker'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Progress Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ProgressTracker />
            </div>
            <div>
              <MoodTracker />
            </div>
          </div>

          {/* Category Navigation */}
          <CategoryNavigation />

          {/* Main Content - Vendor Curation */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <VendorCuration />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard