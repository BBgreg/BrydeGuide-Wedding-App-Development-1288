import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart } = FiIcons;

const TermsOfService = () => {
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
              Terms of Service
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
              <h2>Agreement to Terms</h2>
              <p>These Terms of Service ("Terms") constitute a legally binding agreement between you and BrydeGuide ("we," "us," or "our") governing your access to and use of the BrydeGuide website, mobile application, and services (collectively, the "Services").</p>
              <p>By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.</p>

              <h2>Eligibility</h2>
              <p>You must be at least 18 years old to use our Services. By using our Services, you represent and warrant that you meet this eligibility requirement and that you have the right, authority, and capacity to enter into these Terms.</p>

              <h2>Account Registration</h2>
              <p>To use certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
              <p>You are responsible for safeguarding your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.</p>

              <h2>User Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>Use our Services in any way that violates any applicable law or regulation</li>
                <li>Use our Services for any illegal or unauthorized purpose</li>
                <li>Interfere with or disrupt our Services or servers or networks connected to our Services</li>
                <li>Attempt to gain unauthorized access to any part of our Services</li>
                <li>Use our Services to send unsolicited communications</li>
                <li>Impersonate any person or entity or falsely state or otherwise misrepresent your affiliation with a person or entity</li>
                <li>Use automated means to access or use our Services without our permission</li>
              </ul>

              <h2>Wedding Vendor Recommendations</h2>
              <p>Our Services include recommendations for wedding vendors based on the information you provide and our algorithms. We strive to provide high-quality vendor recommendations, but we do not guarantee the availability, quality, safety, or legality of any vendor's services.</p>
              <p>We are not responsible for any disputes between you and vendors. Any contracts or agreements you enter into with vendors are solely between you and the vendor.</p>

              <h2>Intellectual Property</h2>
              <p>Our Services and their contents, features, and functionality are owned by BrydeGuide and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
              <p>You may not copy, modify, create derivative works, publicly display, publicly perform, republish, download, store, or transmit any materials from our Services without our express prior written consent, except as provided in these Terms.</p>

              <h2>User Content</h2>
              <p>You retain ownership of any content you submit to our Services ("User Content"). By submitting User Content, you grant us a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use, copy, modify, create derivative works based on, distribute, publicly display, publicly perform, and otherwise use such User Content in connection with providing and promoting our Services.</p>
              <p>You represent and warrant that you own or have the necessary rights to submit your User Content and that your User Content does not violate the rights of any third party.</p>

              <h2>Disclaimer of Warranties</h2>
              <p>OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
              <p>WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVER THAT MAKES THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.</p>

              <h2>Limitation of Liability</h2>
              <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL BRYDEGUIDE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.</p>

              <h2>Indemnification</h2>
              <p>You agree to indemnify, defend, and hold harmless BrydeGuide and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms.</p>

              <h2>Termination</h2>
              <p>We may terminate or suspend your account and bar access to our Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms.</p>
              <p>Upon termination, your right to use our Services will immediately cease. All provisions of these Terms which by their nature should survive termination shall survive termination.</p>

              <h2>Changes to Terms</h2>
              <p>We may revise these Terms at any time by posting an updated version on our website. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms.</p>

              <h2>Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wisconsin, without regard to its conflict of law provisions.</p>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <p>
                BrydeGuide<br />
                Email: <a href="mailto:terms@brydeguide.com">terms@brydeguide.com</a><br />
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

export default TermsOfService;