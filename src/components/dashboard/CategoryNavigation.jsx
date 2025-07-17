import React from 'react'
import { useApp } from '../../contexts/AppContext'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiCheck, FiClock } = FiIcons

const CategoryNavigation = () => {
  const { categories, currentCategory, setCurrentCategory, getCategoryProgress } = useApp()

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-nunito font-semibold text-gray-800 mb-4">
        Wedding Categories
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map((category) => {
          const progress = getCategoryProgress(category.id)
          const isActive = currentCategory === category.id
          const isCompleted = progress === 'completed'
          
          return (
            <motion.button
              key={category.id}
              onClick={() => setCurrentCategory(category.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`
                relative p-4 rounded-lg border-2 transition-all duration-200
                ${isActive 
                  ? 'border-sage-400 bg-sage-50' 
                  : 'border-gray-200 hover:border-gray-300'
                }
                ${isCompleted ? 'bg-green-50 border-green-200' : ''}
              `}
            >
              <div className="text-center">
                <div className="text-2xl mb-2">{category.icon}</div>
                <div className="text-sm font-medium text-gray-800 mb-1">
                  {category.name}
                </div>
                
                {/* Status indicator */}
                <div className="flex items-center justify-center">
                  {isCompleted ? (
                    <div className="flex items-center text-green-600">
                      <SafeIcon icon={FiCheck} className="text-sm mr-1" />
                      <span className="text-xs">Complete</span>
                    </div>
                  ) : (
                    <div className="flex items-center text-gray-500">
                      <SafeIcon icon={FiClock} className="text-sm mr-1" />
                      <span className="text-xs">Pending</span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-sage-100 rounded-lg -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryNavigation