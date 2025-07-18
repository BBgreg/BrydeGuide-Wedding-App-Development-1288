import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useApp } from '../contexts/AppContext';
import Header from '../components/dashboard/Header';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiArrowLeft, FiHeart, FiClock } = FiIcons;

const VendorCategories = () => {
  const { category } = useParams();
  const { categories, setCurrentCategory } = useApp();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  
  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setCurrentCategory(category);
    }
  }, [category, setCurrentCategory]);

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentCategory(categoryId);
    navigate(`/vendors/${categoryId}`);
  };

  const handleStartPlanning = (categoryId) => {
    setCurrentCategory(categoryId);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-cream-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-gray-500 hover:text-primary-500 transition-colors">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-700 font-medium">Vendor Categories</span>
            {selectedCategory && (
              <>
                <span className="text-gray-400">/</span>
                <span className="text-primary-600 font-medium">
                  {categories.find(c => c.id === selectedCategory)?.name || 
                    selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('_', ' ')}
                </span>
              </>
            )}
          </div>

          {/* Page Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-800 mb-2">
              {selectedCategory 
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1).replace('_', ' ')} Options` 
                : 'Wedding Vendor Categories'}
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {selectedCategory 
                ? `Browse our curated selection of ${selectedCategory.replace('_', ' ')} vendors for your Milwaukee wedding.`
                : 'Select a category to begin exploring vendors for your perfect Milwaukee wedding.'}
            </p>
          </div>

          {/* Category Grid */}
          {!selectedCategory && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {categories.map((category) => (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleCategorySelect(category.id)}
                  className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md cursor-pointer transition-all border border-gray-200"
                >
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-display font-semibold text-gray-800 mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {getCategoryDescription(category.id)}
                  </p>
                  <button className="inline-flex items-center text-sm text-primary-500 font-medium">
                    Browse Vendors <SafeIcon icon={FiArrowLeft} className="ml-1 rotate-180" />
                  </button>
                </motion.div>
              ))}
            </div>
          )}

          {/* Selected Category Content */}
          {selectedCategory && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <button 
                  onClick={() => navigate('/vendors')}
                  className="inline-flex items-center text-gray-600 hover:text-primary-500 transition-colors"
                >
                  <SafeIcon icon={FiArrowLeft} className="mr-2" />
                  Back to all categories
                </button>
                
                <button className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                  <SafeIcon icon={FiFilter} className="mr-2" /> Filter Options
                </button>
              </div>
              
              {/* Vendor Cards for Selected Category */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getVendorsForCategory(selectedCategory).map((vendor, index) => (
                  <motion.div
                    key={vendor.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all"
                  >
                    <div className="relative h-48 bg-gray-100">
                      <img 
                        src={vendor.image || `https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&q=80`} 
                        alt={vendor.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-gray-700">
                        <SafeIcon icon={FiHeart} className="inline mr-1 text-primary-500" />
                        Top Rated
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-display font-semibold text-gray-800">{vendor.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 mb-3">{vendor.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-primary-600 font-semibold">{vendor.price}</span>
                        <button 
                          onClick={() => handleStartPlanning(selectedCategory)}
                          className="inline-flex items-center text-sm bg-primary-100 text-primary-700 px-3 py-1 rounded-full hover:bg-primary-200 transition-colors"
                        >
                          <SafeIcon icon={FiClock} className="mr-1" /> Start Planning
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="bg-primary-50 border border-primary-100 rounded-xl p-6 text-center mt-8">
                <h3 className="text-xl font-display font-semibold text-gray-800 mb-2">
                  Ready to make your decision?
                </h3>
                <p className="text-gray-600 mb-4">
                  Use our guided planning tool to get perfectly matched vendors and our 24-hour decision timer.
                </p>
                <button 
                  onClick={() => handleStartPlanning(selectedCategory)}
                  className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors shadow-sm"
                >
                  Start Planning This Category
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

// Helper function to get category description
const getCategoryDescription = (categoryId) => {
  const descriptions = {
    wedding_planner: "Expert coordinators to guide your entire wedding journey.",
    venue: "Beautiful spaces to host your perfect ceremony and reception.",
    photography: "Talented photographers to capture your special moments.",
    videography: "Professional videographers to document your celebration.",
    catering: "Delicious food options to delight your wedding guests.",
    dj: "Energetic DJs to keep your dance floor packed all night.",
    lighting: "Atmospheric lighting to transform your venue.",
    photo_booth: "Fun photo booths to entertain your guests.",
    florist: "Creative florists for stunning floral arrangements.",
    music: "Live musicians to add elegance to your ceremony.",
    cake: "Exquisite cakes and desserts for your reception.",
    transportation: "Stylish transportation for you and your guests.",
    officiant: "Engaging officiants to perform your ceremony.",
  };
  
  return descriptions[categoryId] || "Find the perfect vendors for your wedding day.";
};

// Sample data for the selected category view
const getVendorsForCategory = (category) => {
  const vendors = {
    venue: [
      { id: 'v1', name: 'St. James 1868', description: 'Historic venue in downtown Milwaukee with timeless elegance.', price: '$8,000-$15,000', image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&fit=crop&q=80' },
      { id: 'v2', name: 'Discovery World', description: 'Modern lakefront venue with stunning views of Lake Michigan.', price: '$10,000-$20,000', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=300&fit=crop&q=80' },
      { id: 'v3', name: 'The Atrium', description: 'Elegant venue with beautiful natural lighting and garden settings.', price: '$6,000-$12,000', image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&fit=crop&q=80' },
    ],
    photography: [
      { id: 'p1', name: 'Sarah Marie Photography', description: 'Capturing authentic moments with a modern, romantic approach.', price: '$2,500-$4,500', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=300&fit=crop&q=80' },
      { id: 'p2', name: 'Timeless Images', description: 'Classic photography style with attention to detail.', price: '$3,000-$5,000', image: 'https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=400&h=300&fit=crop&q=80' },
      { id: 'p3', name: 'Moment Capturer', description: 'Candid, journalistic approach to wedding photography.', price: '$2,000-$4,000', image: 'https://images.unsplash.com/photo-1494783367193-149034c05e8f?w=400&h=300&fit=crop&q=80' },
    ],
  };
  
  // Default sample data for categories without specific examples
  const defaultVendors = [
    { id: 'd1', name: 'Premium Selection', description: 'Top-rated vendors in Milwaukee for your special day.', price: 'Custom Quotes', image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=400&h=300&fit=crop&q=80' },
    { id: 'd2', name: 'Elegant Options', description: 'Elegant and sophisticated services for your wedding.', price: 'Custom Quotes', image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&q=80' },
    { id: 'd3', name: 'Budget-Friendly', description: 'Quality services that won\'t break your wedding budget.', price: 'Custom Quotes', image: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=300&fit=crop&q=80' },
  ];
  
  return vendors[category] || defaultVendors;
};

export default VendorCategories;