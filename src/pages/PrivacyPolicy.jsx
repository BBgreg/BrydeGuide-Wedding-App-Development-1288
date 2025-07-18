import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart } = FiIcons;

const PrivacyPolicy = () => {
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
      <header className="py-12 bg-gradient-to-r from-primary-100 to-primary-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Last Updated: June 1, 2024
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-8"
          >
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>At BrydeGuide ("we", "our", or "us"), we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.</p>
              <p>Please read this Privacy Policy carefully. By accessing or using our website and services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy.</p>

              <h2>Information We Collect</h2>
              <p>We collect information that you provide directly to us, information we collect automatically when you use our services, and information from third parties.</p>

              <h3>Information You Provide</h3>
              <ul>
                <li><strong>Account Information:</strong> When you register for an account, we collect your name, email address, password, and other registration information.</li>
                <li><strong>Profile Information:</strong> Information you provide in your user profile, such as your wedding date, location, budget, guest count, and style preferences.</li>
                <li><strong>Vendor Selections:</strong> Information about your vendor preferences, decisions, and interactions.</li>
                <li><strong>Communications:</strong> Information you provide when you contact us, respond to surveys, or participate in promotions.</li>
              </ul>

              <h3>Information We Collect Automatically</h3>
              <ul>
                <li><strong>Usage Information:</strong> Information about how you use our services, including pages visited, time spent, and actions taken.</li>
                <li><strong>Device Information:</strong> Information about the device you use to access our services, including device type, operating system, and browser type.</li>
                <li><strong>Location Information:</strong> General location information based on IP address.</li>
                <li><strong>Cookies and Similar Technologies:</strong> We use cookies and similar technologies to collect information about your browsing activities.</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Personalizing your experience and delivering content relevant to your interests</li>
                <li>Processing vendor recommendations and decision support</li>
                <li>Communicating with you about our services, updates, and promotions</li>
                <li>Analyzing usage patterns and optimizing our website and services</li>
                <li>Detecting, preventing, and addressing technical issues and security breaches</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul>
                <li><strong>With Vendors:</strong> When you express interest in or select a vendor, we share relevant information to facilitate the connection.</li>
                <li><strong>Service Providers:</strong> We share information with third-party service providers who perform services on our behalf.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information to comply with applicable laws, regulations, legal processes, or governmental requests.</li>
              </ul>

              <h2>Your Choices</h2>
              <p>You have several choices regarding the information you provide to us:</p>
              <ul>
                <li><strong>Account Information:</strong> You can update or correct your account information at any time.</li>
                <li><strong>Communication Preferences:</strong> You can opt out of receiving promotional emails by following the instructions in those emails.</li>
                <li><strong>Cookies:</strong> You can set your browser to refuse all or some browser cookies or to alert you when cookies are being sent.</li>
              </ul>

              <h2>Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect the security of your personal information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

              <h2>Children's Privacy</h2>
              <p>Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you become aware that a child has provided us with personal information, please contact us.</p>

              <h2>Changes to This Privacy Policy</h2>
              <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top.</p>

              <h2>Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:</p>
              <p>
                BrydeGuide<br />
                Email: <a href="mailto:privacy@brydeguide.com">privacy@brydeguide.com</a><br />
                Address: 123 Wedding Lane, Milwaukee, WI 53202
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-12">
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

export default PrivacyPolicy;