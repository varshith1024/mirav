import React, { useState, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-green-100 text-black shadow-lg">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center"
            onClick={closeMenu}
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center">
              <img 
                src='/logo.png'
                alt='Sri Ekadanta Charitable Trust Logo'
                className='w-18 h-18 lg:w-20 lg:h-21 object-contain'
              />
            </div>
            
            {/* Two lines beside S */}
            <div className="flex flex-col ml-1 mt-1">
              <span className="text-sm lg:text-[20px] pr-[2px] text-amber-800">SRI EKADANTA</span>
              <span className="text-sm lg:text-[20px] tracking-normal text-green-700">Charitable Trust</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Hidden on tablet and mobile */}
          <div className="hidden lg:flex space-x-9">
            <Link 
              to="/" 
              className={`hover:text-green-700 transition ${isActive('/') ? 'text-green-600 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/programs" 
              className={`hover:text-green-700 transition ${isActive('/programs') ? 'text-green-600 font-semibold' : ''}`}
            >
              Programs
            </Link>
            <Link 
              to="/hospitals" 
              className={`hover:text-green-700 transition ${isActive('/hospitals') ? 'text-green-600 font-semibold' : ''}`}
            >
              Hospitals
            </Link>
            <Link 
              to="/gallery" 
              className={`hover:text-green-700 transition ${isActive('/gallery') ? 'text-green-600 font-semibold' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/news" 
              className={`hover:text-green-700 transition ${isActive('/news') ? 'text-green-600 font-semibold' : ''}`}
            >
              News & Events
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-green-700 transition ${isActive('/about') ? 'text-green-600 font-semibold' : ''}`}
            >
              About
            </Link>
          </div>

          {/* Desktop Auth Section - Hidden on tablet and mobile */}
          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link to="/admin" className="bg-stone-400 hover:bg-stone-500 text-white px-4 py-2 rounded transition text-sm">
                    Admin Dashboard
                  </Link>
                )}
                {user.role === 'hospital' && (
                  <Link to="/hospital-portal" className="bg-stone-400 hover:bg-stone-500 text-white px-4 py-2 rounded transition text-sm">
                    Hospital Portal
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="bg-green-200 hover:bg-green-300 px-4 py-2 rounded transition text-sm"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="text-lg text-stone-700">
                WELCOME
              </div>
            )}
          </div>

          {/* Mobile/Tablet menu button - Show on screens smaller than lg (1024px) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-stone-600 hover:bg-green-100 transition"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile/Tablet Navigation Menu - Show on screens smaller than lg (1024px) */}
        {isMenuOpen && (
          <div className="lg:hidden bg-green-100 border-t border-green-200 py-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/" 
                className={`py-3 px-4 rounded transition ${isActive('/') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/programs" 
                className={`py-3 px-4 rounded transition ${isActive('/programs') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                Programs
              </Link>
              <Link 
                to="/hospitals" 
                className={`py-3 px-4 rounded transition ${isActive('/hospitals') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                Hospitals
              </Link>
              <Link 
                to="/gallery" 
                className={`py-3 px-4 rounded transition ${isActive('/gallery') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/news" 
                className={`py-3 px-4 rounded transition ${isActive('/news') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                News & Events
              </Link>
              <Link 
                to="/about" 
                className={`py-3 px-4 rounded transition ${isActive('/about') ? 'bg-green-200 text-green-700 font-semibold' : 'hover:bg-green-200'}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </div>

            {/* Mobile Auth Section */}
            <div className="mt-4 pt-4 border-t border-green-300 px-4">
              {user ? (
                <div className="space-y-3">
                  <div className="text-center text-stone-500">
                    Welcome, {user.name}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {user.role === 'admin' && (
                      <Link 
                        to="/admin" 
                        className="bg-stone-500 hover:bg-stone-600 text-white py-2 px-3 rounded transition text-center text-sm"
                        onClick={closeMenu}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    {user.role === 'hospital' && (
                      <Link 
                        to="/hospital-portal" 
                        className="bg-stone-500 hover:bg-stone-600 text-white py-2 px-3 rounded transition text-center text-sm"
                        onClick={closeMenu}
                      >
                        Hospital Portal
                      </Link>
                    )}
                    <button 
                      onClick={() => {
                        logout();
                        closeMenu();
                      }}
                      className="bg-green-300 hover:bg-green-400 py-2 px-3 rounded transition text-sm w-full"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-lg text-stone-800 mb-2">WELCOME</div>
                  <div className="text-s text-stone-900">
                    Sri Ekadanta Charitable Trust
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;