import React from 'react';
import { Link } from 'react-router-dom';

const Access = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Secure Access Portal</h1>
        <p className="text-gray-600 mb-6">For Trust Administrators & Hospital Partners</p>
        
        <div className="space-y-4 mb-6">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-2">New Users</h3>
            <p className="text-stone-700 text-sm mb-3">Register with your registration key</p>
            <Link 
              to="/admin-register" 
              className="block w-full bg-stone-500 hover:bg-stone-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Register Account
            </Link>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-stone-800 mb-2">Existing Users</h3>
            <p className="text-stone-700 text-sm mb-3">Login with your credentials</p>
            <Link 
              to="/login" 
              className="block w-full bg-stone-500 hover:bg-stone-600 text-white py-3 rounded-lg font-semibold transition"
            >
              Login to Portal
            </Link>
          </div>
        </div>

        <div className="border-t pt-4">
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Access;