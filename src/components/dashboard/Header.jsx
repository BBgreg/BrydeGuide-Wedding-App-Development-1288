import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { useApp } from '../../contexts/AppContext'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiHeart, FiUser, FiLogOut, FiSettings } = FiIcons

const Header = () => {
  const { userProfile, signOut } = useAuth()
  const { overallProgress } = useApp()

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-sm border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <SafeIcon icon={FiHeart} className="text-2xl text-rose-400 mr-2" />
            <h1 className="text-xl font-nunito font-bold text-gray-800">BrydeGuide</h1>
          </div>

          {/* Progress Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="w-48 bg-gray-200 rounded-full h-2">
              <div
                className="bg-sage-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${overallProgress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 font-medium">
              {Math.round(overallProgress)}% Complete
            </span>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUser} className="text-gray-400" />
              <span className="text-sm text-gray-700">{userProfile?.name}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Settings"
              >
                <SafeIcon icon={FiSettings} />
              </button>
              
              <button
                onClick={signOut}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                title="Sign Out"
              >
                <SafeIcon icon={FiLogOut} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}

export default Header