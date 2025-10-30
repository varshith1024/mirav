import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-700 text-white py-8 w-full overflow-hidden">
      <div className="container mx-auto px-4 max-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          <div className="lg:col-span-2 xl:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Sri Ekadanta Charitable Trust</h3>
            <p className="text-gray-300 text-sm lg:text-base">
              Empowering communities through welfare programs and healthcare initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/programs" className="text-gray-300 hover:text-white text-sm lg:text-base">Programs</Link></li>
              <li><Link to="/hospitals" className="text-gray-300 hover:text-white text-sm lg:text-base">Hospital Partners</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-white text-sm lg:text-base">News & Events</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white text-sm lg:text-base">Gallery</Link></li>
              <li><Link to="/volunteer" className="text-gray-300 hover:text-white text-sm lg:text-base">Become a Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="text-sm lg:text-base">sriekadantacharitabletrust@gmail.com</li>
              <li className="text-sm lg:text-base">+91 1234567890</li>
              <li className="text-sm lg:text-base">Hyderabad, Telangana</li>
            </ul>
          </div>
          
          <div className="lg:col-span-2 xl:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1MNrhvxooU/" className="text-gray-300 hover:text-white text-sm lg:text-base">Facebook</a>
              <a href="https://x.com/SRIEKADANTA" className="text-gray-300 hover:text-white text-sm lg:text-base">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white text-sm lg:text-base">LinkedIn</a>
            </div>
            
            {/* Staff Access Link for Mobile */}
            <div className="mt-6 lg:mt-8 pt-4 border-t border-gray-600 lg:hidden">
              <Link to="/access" className="text-gray-300 hover:text-white text-sm">
                Staff & Partner Portal ›
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-300">
          <p className="text-sm lg:text-base">&copy; 2025 Sri Ekadanta Charitable Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;