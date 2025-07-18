import React, { useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { motion } from 'framer-motion'
import SafeIcon from '../../common/SafeIcon'
import * as FiIcons from 'react-icons/fi'

const { FiMail, FiLock, FiEye, FiEyeOff, FiUser, FiPhone, FiCalendar, FiMapPin, FiUsers, FiDollarSign, FiHeart } = FiIcons

const SignupForm = ({ onToggleMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    wedding_date: '',
    wedding_location: '',
    guest_count_estimate: '',
    budget_total: '',
    style_preference: 'classic'
  })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const { signUp } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    
    try {
      await signUp(formData.email, formData.password, {
        name: formData.name,
        phone: formData.phone,
        wedding_date: formData.wedding_date || null,
        wedding_location: formData.wedding_location || 'Milwaukee, WI',
        venue_city: 'Milwaukee',
        guest_count_estimate: parseInt(formData.guest_count_estimate) || 100,
        budget_total: parseInt(formData.budget_total) || 30000,
        style_preference: formData.style_preference,
        planning_stage: 'early_planning',
        stress_level: 5
      })
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <SafeIcon icon={FiHeart} className="text-4xl text-primary-500 mr-2" />
          <h1 className="text-3xl font-display font-bold text-gray-800">BrydeGuide</h1>
        </div>
        <p className="text-gray-600">Create your account and start your stress-free wedding planning journey!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <div className="relative">
              <SafeIcon icon={FiUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <div className="relative">
              <SafeIcon icon={FiMail} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <div className="relative">
              <SafeIcon icon={FiLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
                className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Create a password (min 6 characters)"
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <SafeIcon icon={showPassword ? FiEyeOff : FiEye} />
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <div className="relative">
              <SafeIcon icon={FiPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Enter your phone number"
              />
            </div>
          </div>

          <div>
            <label htmlFor="wedding_date" className="block text-sm font-medium text-gray-700 mb-2">
              Wedding Date
            </label>
            <div className="relative">
              <SafeIcon icon={FiCalendar} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="wedding_date"
                name="wedding_date"
                type="date"
                value={formData.wedding_date}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              />
            </div>
          </div>

          <div>
            <label htmlFor="wedding_location" className="block text-sm font-medium text-gray-700 mb-2">
              Wedding Location
            </label>
            <div className="relative">
              <SafeIcon icon={FiMapPin} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="wedding_location"
                name="wedding_location"
                type="text"
                value={formData.wedding_location}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="Milwaukee, WI"
              />
            </div>
          </div>

          <div>
            <label htmlFor="guest_count_estimate" className="block text-sm font-medium text-gray-700 mb-2">
              Guest Count Estimate
            </label>
            <div className="relative">
              <SafeIcon icon={FiUsers} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="guest_count_estimate"
                name="guest_count_estimate"
                type="number"
                value={formData.guest_count_estimate}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="100"
                min="1"
              />
            </div>
          </div>

          <div>
            <label htmlFor="budget_total" className="block text-sm font-medium text-gray-700 mb-2">
              Total Budget ($)
            </label>
            <div className="relative">
              <SafeIcon icon={FiDollarSign} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id="budget_total"
                name="budget_total"
                type="number"
                value={formData.budget_total}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder="30000"
                min="1"
              />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="style_preference" className="block text-sm font-medium text-gray-700 mb-2">
            Wedding Style Preference
          </label>
          <select
            id="style_preference"
            name="style_preference"
            value={formData.style_preference}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            required
          >
            <option value="classic">Classic & Timeless</option>
            <option value="modern">Modern & Minimalist</option>
            <option value="bohemian">Bohemian & Rustic</option>
            <option value="eclectic">Eclectic & Unique</option>
          </select>
        </div>

        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </div>
      </form>

      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Already have an account?{' '}
          <button
            onClick={onToggleMode}
            className="text-primary-500 hover:text-primary-600 font-medium"
          >
            Sign In
          </button>
        </p>
      </div>
    </motion.div>
  )
}

export default SignupForm