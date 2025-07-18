import React from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuth } from '../contexts/AuthContext';

const { FiArrowRight, FiHeart, FiClock, FiSmile, FiCheck, FiStar, FiUsers } = FiIcons;

const LandingPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    if (user) {
      navigate(`/vendors/${category}`);
    } else {
      navigate('/signup');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-sage-50">
      {/* Navigation */}
      <nav className="relative z-10 bg-white/80 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <SafeIcon icon={FiHeart} className="text-2xl text-primary-500 mr-2" />
                <span className="text-xl font-display font-bold text-gray-900">BrydeGuide</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <Link to="/dashboard" className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                  Dashboard
                </Link>
              ) : (
                <>
                  <Link to="/login" className="text-gray-700 hover:text-primary-500 transition-colors">
                    Sign In
                  </Link>
                  <Link to="/signup" className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight">
                  Your Dream Wedding,<span className="text-primary-500"> Stress-Free</span>
                </h1>
                <p className="text-xl text-gray-600 mt-6">
                  Experience the joy of planning with AI-curated vendors, 24-hour decision timers, and emotional support features designed for Milwaukee couples.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link to="/signup" className="inline-flex items-center justify-center px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl">
                  Start Planning Free <SafeIcon icon={FiArrowRight} className="ml-2" />
                </Link>
                <Link to="/login" className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-500 text-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-colors">
                  Sign In
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center space-x-6 text-sm text-gray-600"
              >
                <div className="flex items-center">
                  <SafeIcon icon={FiUsers} className="text-primary-500 mr-2" />
                  <span>500+ Happy Couples</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiStar} className="text-primary-500 mr-2" />
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCheck} className="text-primary-500 mr-2" />
                  <span>Milwaukee Focused</span>
                </div>
              </motion.div>
            </div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80" alt="Beautiful wedding ceremony" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiHeart} className="text-primary-500" />
                  <span className="text-sm font-medium">3 Perfect Matches</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="text-sage-500" />
                  <span className="text-sm font-medium">24hr Decision Timer</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose BrydeGuide?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We make wedding planning delightful, not stressful, with features designed specifically for busy couples.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FiHeart}
              title="AI-Curated Vendors"
              description="Get exactly 3 perfectly matched vendor options per category, aligned with your style, budget, and preferences."
              color="primary"
            />
            <FeatureCard
              icon={FiClock}
              title="24-Hour Decision Timers"
              description="Our gentle decision timers help you make confident choices without overwhelm or decision fatigue."
              color="sage"
            />
            <FeatureCard
              icon={FiSmile}
              title="Emotional Support"
              description="Track your planning journey with mood check-ins and receive personalized support when you need it most."
              color="accent"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-gray-600">
              From venues to vendors, we've got your entire Milwaukee wedding covered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Venues', icon: '🏛️', id: 'venue' },
              { name: 'Wedding Planners', icon: '👰', id: 'wedding_planner' },
              { name: 'Photography', icon: '📸', id: 'photography' },
              { name: 'Videography', icon: '🎥', id: 'videography' },
              { name: 'Catering', icon: '🍽️', id: 'catering' },
              { name: 'DJ Services', icon: '🎧', id: 'dj' },
              { name: 'Lighting', icon: '💡', id: 'lighting' },
              { name: 'Photo Booth', icon: '📷', id: 'photo_booth' },
              { name: 'Florists', icon: '🌸', id: 'florist' },
              { name: 'Cake', icon: '🎂', id: 'cake' },
              { name: 'Transportation', icon: '🚗', id: 'transportation' },
              { name: 'Officiants', icon: '👨‍💼', id: 'officiant' }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="text-3xl mb-3">{category.icon}</div>
                <h3 className="text-sm font-medium text-gray-900">{category.name}</h3>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to={user ? "/vendors" : "/signup"} 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
            >
              View All Categories <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of Milwaukee couples who've planned their dream wedding stress-free with BrydeGuide.
            </p>
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-primary-500 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl text-lg"
            >
              Create Your Free Account <SafeIcon icon={FiArrowRight} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiHeart} className="text-primary-500 text-2xl mr-2" />
                <span className="text-xl font-display font-bold">BrydeGuide</span>
              </div>
              <p className="text-gray-400">
                Making wedding planning joyful, one decision at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to={user ? "/vendors/venue" : "/signup"} className="hover:text-white transition-colors">Venues</Link></li>
                <li><Link to={user ? "/vendors/photography" : "/signup"} className="hover:text-white transition-colors">Photography</Link></li>
                <li><Link to={user ? "/vendors/catering" : "/signup"} className="hover:text-white transition-colors">Catering</Link></li>
                <li><Link to={user ? "/vendors" : "/signup"} className="hover:text-white transition-colors">View All</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Milwaukee Focus</h4>
              <p className="text-gray-400 text-sm">
                Proudly serving Milwaukee couples with locally-curated vendors and personalized support.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BrydeGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  const colorClasses = {
    primary: 'bg-primary-500 text-white',
    sage: 'bg-sage-500 text-white',
    accent: 'bg-accent-500 text-white'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl"
    >
      <div className={`inline-flex items-center justify-center w-16 h-16 ${colorClasses[color]} rounded-2xl mb-6`}>
        <SafeIcon icon={Icon} className="text-2xl" />
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default LandingPage;