import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiMapPin, FiDollarSign, FiStar, FiPhone, FiMail, FiExternalLink, FiHeart, FiX, FiInfo } = FiIcons

const VendorCard = ({ vendor, onSave, onReject, onContact, saved = false }) => {
  const [showDetails, setShowDetails] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  const formatPrice = (min, max) => {
    if (min === max) return `$${min.toLocaleString()}`
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`
  }

  const getImageUrl = () => {
    if (vendor.portfolio_images && vendor.portfolio_images.length > 0) {
      return vendor.portfolio_images[0]
    }
    return `https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&q=80`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300"
    >
      {/* Image Section */}
      <div className="relative h-48 bg-gray-100">
        <img
          src={getImageUrl()}
          alt={vendor.business_name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
          </div>
        )}
        
        {/* Distance Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
          <SafeIcon icon={FiMapPin} className="inline mr-1" />
          {vendor.distance_from_milwaukee} mi
        </div>
        
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
          <SafeIcon icon={FiStar} className="inline mr-1 text-accent-500" />
          {vendor.rating}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-display font-semibold text-gray-800 line-clamp-1">
            {vendor.business_name}
          </h3>
          <div className="text-right">
            <div className="text-lg font-bold text-primary-600">
              {formatPrice(vendor.price_minimum, vendor.price_maximum)}
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 mb-3">
            {vendor.style_tags?.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">
            {vendor.description}
          </p>
        </div>

        {/* Specialties */}
        {vendor.specialties && vendor.specialties.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
            <ul className="text-sm text-gray-600">
              {vendor.specialties.slice(0, 3).map((specialty, index) => (
                <li key={index} className="flex items-center mb-1">
                  <div className="w-1 h-1 bg-primary-400 rounded-full mr-2"></div>
                  {specialty}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3 mb-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSave(vendor)}
            className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
              saved 
                ? 'bg-primary-500 text-white' 
                : 'bg-primary-100 text-primary-700 hover:bg-primary-200'
            }`}
          >
            <SafeIcon icon={FiHeart} className="inline mr-2" />
            {saved ? 'Saved' : 'Save'}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onReject(vendor)}
            className="flex-1 py-2 px-4 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={FiX} className="inline mr-2" />
            Pass
          </motion.button>
        </div>

        {/* Contact & Details */}
        <div className="flex space-x-2">
          <button
            onClick={() => onContact(vendor)}
            className="flex-1 py-2 px-3 bg-accent-100 text-accent-700 rounded-lg text-sm font-medium hover:bg-accent-200 transition-colors"
          >
            <SafeIcon icon={FiPhone} className="inline mr-1" />
            Contact
          </button>
          
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
          >
            <SafeIcon icon={FiInfo} className="inline mr-1" />
            Details
          </button>
          
          {vendor.website_url && (
            <button
              onClick={() => window.open(vendor.website_url, '_blank')}
              className="py-2 px-3 bg-sage-100 text-sage-700 rounded-lg text-sm font-medium hover:bg-sage-200 transition-colors"
            >
              <SafeIcon icon={FiExternalLink} />
            </button>
          )}
        </div>

        {/* Expanded Details */}
        {showDetails && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 pt-4 border-t border-gray-200"
          >
            <div className="space-y-3">
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Contact Information</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  {vendor.contact_email && (
                    <div className="flex items-center">
                      <SafeIcon icon={FiMail} className="mr-2" />
                      {vendor.contact_email}
                    </div>
                  )}
                  {vendor.contact_phone && (
                    <div className="flex items-center">
                      <SafeIcon icon={FiPhone} className="mr-2" />
                      {vendor.contact_phone}
                    </div>
                  )}
                </div>
              </div>
              
              {vendor.capacity_minimum && vendor.capacity_maximum && (
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-1">Capacity</h4>
                  <p className="text-sm text-gray-600">
                    {vendor.capacity_minimum} - {vendor.capacity_maximum} guests
                  </p>
                </div>
              )}
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-1">Reviews</h4>
                <p className="text-sm text-gray-600">
                  {vendor.review_count} reviews • {vendor.rating}/5.0 rating
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default VendorCard