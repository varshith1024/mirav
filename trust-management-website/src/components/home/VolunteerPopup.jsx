import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const VolunteerPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={closePopup}
      ></div>
      
      {/* Popup */}
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 w-80 bg-white rounded-lg shadow-xl z-50 animate-slide-in">
        {/* Close Button */}
        <button
          onClick={closePopup}
          className="absolute -top-2 -left-2 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm hover:bg-red-600 transition shadow-lg"
        >
          ×
        </button>

        {/* Popup Content */}
        <div className="p-6">
          {/* Header */}
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl text-green-600">❤️</span>
            </div>
            <h3 className="text-xl font-bold text-gray-800">Become a Volunteer</h3>
            <p className="text-gray-600 text-sm mt-1">
              Join our mission to help communities in need
            </p>
          </div>

          {/* Volunteer Opportunities */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Field Work & Distribution
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Teaching & Mentoring
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Medical Camp Support
            </div>
            <div className="flex items-center text-sm text-gray-700">
              <span className="w-5 h-5 bg-green-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs">✓</span>
              Event Organization
            </div>
          </div>

          {/* CTA Button */}
          <Link 
            to="/volunteer"
            onClick={closePopup}
            className="block w-full bg-stone-500 hover:bg-stone-600 text-white text-center py-3 rounded-lg font-semibold transition shadow-md mb-3"
          >
            Join as Volunteer
          </Link>

          {/* Secondary Action */}
          <button
            onClick={closePopup}
            className="block w-full text-gray-500 hover:text-gray-700 text-sm text-center transition"
          >
            Not Now
          </button>
        </div>

        {/* Decorative Corner */}
        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-orange-500 rounded-full opacity-20"></div>
      </div>
    </>
  );
};

export default VolunteerPopup;