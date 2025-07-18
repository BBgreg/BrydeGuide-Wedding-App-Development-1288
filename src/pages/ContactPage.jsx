import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import toast from 'react-hot-toast';

const { FiHeart, FiMail, FiMapPin, FiPhone, FiSend } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1500);
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Have questions about BrydeGuide? We're here to help with your wedding planning journey.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-md p-8"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors disabled:opacity-70 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiSend} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-700 mb-8">
                  We'd love to hear from you. Whether you have questions about our services, need assistance with your wedding planning, or want to share your feedback, our team is here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <SafeIcon icon={FiMapPin} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Our Office</h3>
                    <p className="text-gray-700">
                      123 Wedding Lane<br />
                      Milwaukee, WI 53202<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <SafeIcon icon={FiMail} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:hello@brydeguide.com" className="hover:text-primary-500 transition-colors">hello@brydeguide.com</a><br />
                      <a href="mailto:support@brydeguide.com" className="hover:text-primary-500 transition-colors">support@brydeguide.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center text-primary-600 mr-4">
                    <SafeIcon icon={FiPhone} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+14145551234" className="hover:text-primary-500 transition-colors">(414) 555-1234</a><br />
                      Monday-Friday, 9am-5pm CST
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-sage-50 p-6 rounded-xl border border-sage-100 mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Wedding Planning Hours</h3>
                <p className="text-gray-700 mb-4">
                  Need urgent planning help? Our wedding specialists are available:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Monday-Friday</span>
                    <span>9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <section className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Find quick answers to common questions about BrydeGuide.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <FaqItem
                    question="Is BrydeGuide completely free to use?"
                    answer="Yes! BrydeGuide is completely free for couples. We're able to offer our services at no cost because vendors pay a small fee to be featured in our curated selections."
                  />
                  <FaqItem
                    question="How does the 24-hour decision timer work?"
                    answer="Once you view vendor options in a category, our 24-hour timer begins. This gentle nudge helps you make decisions efficiently without feeling rushed. You can always request more time if needed."
                  />
                  <FaqItem
                    question="Can I request specific vendors not in your system?"
                    answer="Absolutely! While we curate vendors based on your preferences, you can always request specific vendors to be included in your options."
                  />
                </div>
                <div className="space-y-6">
                  <FaqItem
                    question="Do you only serve Milwaukee couples?"
                    answer="Currently, our vendor network is focused on the Milwaukee area, but we're expanding to more Wisconsin cities soon. Even if you're planning from elsewhere, you can use our tools for a Milwaukee wedding."
                  />
                  <FaqItem
                    question="How do you select the three vendor options?"
                    answer="Our algorithm considers your budget, style preferences, guest count, venue location, and other factors to present exactly three options that best match your unique needs."
                  />
                  <FaqItem
                    question="What makes BrydeGuide different from other planning tools?"
                    answer="Unlike other tools that overwhelm you with endless options, we focus on decision efficiency by providing exactly three perfect matches per category, combined with emotional support features."
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
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

// FAQ Item Component
const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 pb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-2 text-gray-700"
        >
          <p>{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;