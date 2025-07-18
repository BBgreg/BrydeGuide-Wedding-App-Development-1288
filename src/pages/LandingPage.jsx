import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowRight, FiHeart, FiClock, FiSmile } = FiIcons;

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-5xl md:text-7xl text-white mb-6"
            >
              Your Stress-Free Wedding Planning Journey Starts Here
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 mb-8"
            >
              Experience the joy of planning with AI-curated vendors, 24-hour decision timers, and emotional support features.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-x-4"
            >
              <Link
                to="/signup"
                className="inline-flex items-center px-8 py-3 bg-primary-500 text-white rounded-full font-medium hover:bg-primary-600 transition-colors"
              >
                Start Planning
                <SafeIcon icon={FiArrowRight} className="ml-2" />
              </Link>
              
              <Link
                to="/login"
                className="inline-flex items-center px-8 py-3 bg-white/20 text-white rounded-full font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                Sign In
              </Link>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-gray-900 mb-4">
              Why Choose BrydeGuide?
            </h2>
            <p className="text-lg text-gray-600">
              We make wedding planning delightful, not stressful
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard 
              icon={FiHeart}
              title="Curated Vendors"
              description="Get exactly 3 AI-matched vendor options per category, perfectly aligned with your style and budget."
            />
            <FeatureCard 
              icon={FiClock}
              title="Decision Timers"
              description="Our 24-hour decision timers help you make confident choices without decision fatigue."
            />
            <FeatureCard 
              icon={FiSmile}
              title="Emotional Support"
              description="Track your planning journey with mood check-ins and receive personalized support."
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600">
              From venues to vendors, we've got your entire wedding covered
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Venues', 'Wedding Planners', 'Photography', 'Videography',
              'Catering', 'DJ Services', 'Lighting', 'Photo Booth',
              'Florists', 'Cake', 'Transportation', 'Officiants'
            ].map((category) => (
              <div 
                key={category}
                className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join BrydeGuide today and experience stress-free wedding planning
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center px-8 py-3 bg-white text-primary-500 rounded-full font-medium hover:bg-white/90 transition-colors"
          >
            Create Your Account
            <SafeIcon icon={FiArrowRight} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-display text-2xl mb-4">BrydeGuide</h3>
              <p className="text-gray-400">
                Making wedding planning joyful, one decision at a time.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Venues</li>
                <li>Photography</li>
                <li>Catering</li>
                <li>More...</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-6 bg-secondary-50 rounded-xl text-center"
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 text-white rounded-full mb-4">
        <SafeIcon icon={Icon} className="text-xl" />
      </div>
      <h3 className="text-xl font-medium text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default LandingPage;