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
              <li className="text-sm lg:text-base">
              <a href="mailto:sriekadantacharitabletrust@gmail.com"className="hover:text-white ">sriekadantacharitabletrust@gmail.com</a>
              </li>

              <li className="text-sm lg:text-base">+91 1234567890</li>
              <li className="text-sm lg:text-base">Hyderabad, Telangana</li>
            </ul>
          </div>

          <div className="lg:col-span-2 xl:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

            <div className="flex space-x-4">

              {/* FACEBOOK */}
              <a href="https://www.facebook.com/share/1MNrhvxooU/" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" className="hover:opacity-80 transition">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 
                    23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 
                    1.894-4.788 4.659-4.788 1.325 0 2.464.099 
                    2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 
                    1.763v2.311h3.587l-.467 3.696h-3.12V24h6.116C23.403 
                    24 24 23.403 24 22.674V1.326C24 
                    .597 23.403 0 22.675 0z"/>
                </svg>
              </a>

              {/* INSTAGRAM (Official clean outline logo) */}
<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="28" 
    height="28" 
    fill="none" 
    stroke="#ffffff" 
    strokeWidth="2"
    viewBox="0 0 24 24"
    className="hover:opacity-80 transition"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <circle cx="12" cy="12" r="4"></circle>
    <circle cx="17" cy="7" r="1.5" fill="#ffffff"></circle>
  </svg>
</a>


              {/* LINKEDIN */}
              <a href="#" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#ffffff" viewBox="0 0 24 24" className="hover:opacity-80 transition">
                  <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.036-1.852-3.036-1.853 
                    0-2.136 1.445-2.136 2.939v5.666H10V9h3.112v1.561h.045c.434-.82 
                    1.494-1.686 3.073-1.686 3.289 0 3.894 2.164 
                    3.894 4.977v6.6zM5.337 7.433a1.815 1.815 0 
                    110-3.63 1.815 1.815 0 010 3.63zM6.556 
                    20.452H4.11V9h2.446v11.452z"/>
                </svg>
              </a>

            </div>

            {/* Mobile Portal Link */}
            <div className="mt-6 lg:mt-8 pt-4 border-t border-gray-600 lg:hidden">
              <Link to="/access" className="text-gray-300 hover:text-white text-sm">
                Staff & Partner Portal 
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
