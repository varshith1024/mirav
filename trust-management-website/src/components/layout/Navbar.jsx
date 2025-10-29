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
            className="flex items-center   "
            onClick={closeMenu}
          >
            <div className="w-20 h-20   rounded-full flex items-center justify-center shadow-">
              <img 
                src='/logo.png'
                alt='Sri Ekadanta Charitable Trust Logo'
                className='w-18 h-18 lg:w-29 lg:h-29 object-contain'
              />
            </div>
            
            {/* Big shared S */}
            {/* <span className="text-6xl lg:text-6xl  text-amber-800 leading-none select-none">S</span> */}

            {/* Two lines beside S */}
            <div className="flex flex-col leading- ml-1 mt-1 ">
              <span className="text-sm lg:text-[20px]  pr-[2px] text-amber-800">SRI EKADANTA</span>
              <span className="text-sm lg:text-[20px] tracking-normal  text-green-700">Charitable Trust</span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-6 lg:space-x-9">
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

          {/* Desktop Auth Section - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {user.role === 'admin' && (
                  <Link to="/admin" className="bg-stone-300 hover:bg-stone-400 px-4 py-2 rounded transition text-sm">
                    Admin Dashboard
                  </Link>
                )}
                {user.role === 'hospital' && (
                  <Link to="/hospital-portal" className="bg-stone-300 hover:bg-stone-400 px-4 py-2 rounded transition text-sm">
                    Hospital Portal
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded transition text-sm"
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

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-stone-600 hover:bg-amber-100 transition"
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

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-100 border-t border-amber-200 py-4">
            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-3 px-4">
              <Link 
                to="/" 
                className={`py-3 px-4 rounded transition ${isActive('/') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                to="/programs" 
                className={`py-3 px-4 rounded transition ${isActive('/programs') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                Programs
              </Link>
              <Link 
                to="/hospitals" 
                className={`py-3 px-4 rounded transition ${isActive('/hospitals') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                Hospitals
              </Link>
              <Link 
                to="/gallery" 
                className={`py-3 px-4 rounded transition ${isActive('/gallery') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                Gallery
              </Link>
              <Link 
                to="/news" 
                className={`py-3 px-4 rounded transition ${isActive('/news') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                News & Events
              </Link>
              <Link 
                to="/about" 
                className={`py-3 px-4 rounded transition ${isActive('/about') ? 'bg-amber-200 text-yellow-700 font-semibold' : 'hover:bg-amber-200'}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </div>

            {/* Mobile Auth Section */}
            <div className="mt-4 pt-4 border-t border-amber-300 px-4">
              {user ? (
                <div className="space-y-3">
                  <div className="text-center text-stone-500">
                    Welcome, {user.name}
                  </div>
                  <div className="flex flex-col space-y-2">
                    {user.role === 'admin' && (
                      <Link 
                        to="/admin" 
                        className="bg-stone-300 hover:bg-stone-400 py-2 px-3 rounded transition text-center text-sm"
                        onClick={closeMenu}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    {user.role === 'hospital' && (
                      <Link 
                        to="/hospital-portal" 
                        className="bg-stone-300 hover:bg-stone-400 py-2 px-3 rounded transition text-center text-sm"
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
                      className="bg-amber-200 hover:bg-amber-300 py-2 px-3 rounded transition text-sm w-full"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-lg text-stone-500 mb-2">WELCOME</div>
                  <div className="text-xs text-stone-400">
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