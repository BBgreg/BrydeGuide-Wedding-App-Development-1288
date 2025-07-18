import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {useLocation, useNavigate} from 'react-router-dom'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {useAuth} from '../../contexts/AuthContext'

const AuthPage = ({initialMode}) => {
  const [isLogin, setIsLogin] = useState(initialMode !== "signup")
  const {user} = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  
  useEffect(() => {
    // If user is already logged in, redirect to dashboard
    if (user) {
      navigate('/dashboard')
    }
  }, [user, navigate])

  useEffect(() => {
    // Set mode based on URL path
    if (location.pathname === '/signup') {
      setIsLogin(false)
    } else if (location.pathname === '/login') {
      setIsLogin(true)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-sage-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{opacity: 0, scale: 0.95}} 
        animate={{opacity: 1, scale: 1}} 
        className="w-full max-w-4xl" 
      >
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left side - Branding */}
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-8 lg:p-12 flex items-center justify-center">
              <div className="text-white text-center">
                <motion.div
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  transition={{delay: 0.2}}
                >
                  <h2 className="text-4xl font-display font-bold mb-4">
                    Stress-Free Wedding Planning
                  </h2>
                  <p className="text-xl opacity-90 mb-6">
                    Get exactly 3 AI-curated vendor options per category
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>24-hour decision timers</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Emotional support features</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Milwaukee-focused curation</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right side - Auth Form */}
            <div className="p-8 lg:p-12">
              {isLogin ? (
                <LoginForm onToggleMode={() => setIsLogin(false)} />
              ) : (
                <SignupForm onToggleMode={() => setIsLogin(true)} />
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AuthPage