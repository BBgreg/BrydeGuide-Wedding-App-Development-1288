import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import SafeIcon from '../../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHeart } = FiIcons;

const Header = () => {
  const { user } = useAuth();
  const location = useLocation();
  const isAuthPage = location.pathname === '/signin' || location.pathname === '/signup';

  if (isAuthPage) return null;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <SafeIcon icon={FiHeart} className="text-2xl text-primary-500 mr-2" />
            <span className="text-xl font-display font-bold text-gray-900">BrydeGuide</span>
          </Link>

          <div className="flex items-center space-x-4">
            {user ? (
              <Link
                to="/dashboard"
                className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  to="/signin"
                  className="text-gray-700 hover:text-primary-500 transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;