import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart, FiArrowLeft, FiUsers, FiSmile, FiClock } = FiIcons;

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Navigation */}
      <nav className="relative z-10 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <SafeIcon icon={FiHeart} className="text-2xl text-primary-500 mr-2" />
                <span className="text-xl font-display font-bold text-gray-900">BrydeGuide</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-primary-500 transition-colors">
                Sign In
              </Link>
              <Link to="/signup" className="bg-primary-500 text-white px-4 py-2 rounded-full hover:bg-primary-600 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="py-20 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Our Story
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              BrydeGuide was born from a simple idea: wedding planning should be joyful, not stressful.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Our Mission */}
          <section className="mb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 mb-4">
                  We believe that every couple deserves a stress-free wedding planning experience. Our mission is to simplify decision-making, reduce choice overload, and provide emotional support throughout the planning journey.
                </p>
                <p className="text-gray-700">
                  By curating exactly three perfect vendor matches per category and implementing 24-hour decision timers, we've created a system that helps couples make confident choices without the overwhelm that traditionally comes with wedding planning.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=400&fit=crop&q=80"
                  alt="Happy couple planning their wedding"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* Our Values */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                These principles guide everything we do at BrydeGuide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ValueCard
                icon={FiClock}
                title="Decision Efficiency"
                description="We believe that having fewer, better options leads to more confident decisions and less stress."
              />
              <ValueCard
                icon={FiSmile}
                title="Emotional Wellbeing"
                description="Wedding planning should bring joy, not anxiety. We prioritize your emotional health throughout the journey."
              />
              <ValueCard
                icon={FiUsers}
                title="Local Community"
                description="We're dedicated to showcasing the best Milwaukee-area vendors and creating lasting connections."
              />
            </div>
          </section>

          {/* Our Team */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Meet Our Team
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                The passionate people behind BrydeGuide who are dedicated to making your wedding planning experience exceptional.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TeamMember
                name="Emily Johnson"
                role="Founder & CEO"
                bio="Former wedding planner who saw firsthand how decision fatigue affects couples."
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80"
              />
              <TeamMember
                name="Michael Rodriguez"
                role="Head of Vendor Relations"
                bio="With 10+ years in the wedding industry, Michael curates our exceptional vendor network."
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80"
              />
              <TeamMember
                name="Sarah Williams"
                role="User Experience Director"
                bio="Dedicated to creating intuitive, stress-reducing tools for our wedding planning platform."
                image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&q=80"
              />
            </div>
          </section>

          {/* CTA */}
          <section className="bg-primary-50 border border-primary-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Ready to Experience Stress-Free Wedding Planning?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join hundreds of Milwaukee couples who've planned their perfect wedding with BrydeGuide.
            </p>
            <Link
              to="/signup"
              className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-600 transition-colors"
            >
              Create Your Free Account
            </Link>
          </section>
        </div>
      </main>

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
                <li><Link to="/vendors/venue" className="hover:text-white transition-colors">Venues</Link></li>
                <li><Link to="/vendors/photography" className="hover:text-white transition-colors">Photography</Link></li>
                <li><Link to="/vendors/catering" className="hover:text-white transition-colors">Catering</Link></li>
                <li><Link to="/vendors" className="hover:text-white transition-colors">View All</Link></li>
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

// Value Card Component
const ValueCard = ({ icon, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-primary-600">
        <SafeIcon icon={icon} className="text-xl" />
      </div>
      <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  );
};

// Team Member Component
const TeamMember = ({ name, role, bio, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-xl overflow-hidden shadow-md"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-56 object-cover object-center"
      />
      <div className="p-6">
        <h3 className="text-xl font-display font-semibold text-gray-900">{name}</h3>
        <p className="text-primary-600 font-medium mb-2">{role}</p>
        <p className="text-gray-700 text-sm">{bio}</p>
      </div>
    </motion.div>
  );
};

export default AboutPage;