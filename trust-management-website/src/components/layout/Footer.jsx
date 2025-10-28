import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-700 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Trust </h3>
            <p className="text-gray-300">
              Empowering communities through welfare programs and healthcare initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-white">Programs</Link></li>
              <li><Link to="/hospitals" className="text-gray-300 hover:text-white">Hospital Partners</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white">News & Events</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white">Become a Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Email: sriekadantacharitabletrust@gmail.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Hyderabad</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-300">
          <p>&copy; 2025 Sri Ekadanta Charitable Trust  All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;