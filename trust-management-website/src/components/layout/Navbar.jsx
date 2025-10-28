import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-amber-50 text-stone-600 shadow-lg">
      <div className="container mx-auto px-20">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
      <Link
  to="/"
  className="flex items-center "
>
  <div className="w-15 h-1 rounded-full flex items-center justify-center shadow-md">
  <img 
     src='/logo.png'
     alt='logo'
     className='w-24 h-24  object-contain'
     />
     </div>
  {/* Big shared S */}
  
  <span className="text-6xl font-bold text-amber-500  leading-none select-none">S</span>

  {/* Two lines beside S */}
  <div className=" flex flex-col  leading-tight ml-1">
    <span className="text-[20px]  tracking-wide pr-[2px]">RI EKADANTA</span>
    <span className="text-[20px] tracking-normal">Charitable Trust</span>
  </div>

</Link>
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-9">
            <Link 
              to="/" 
              className={`hover:text-yellow-700 transition ${isActive('/') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/programs" 
              className={`hover:text-yellow-600 transition ${isActive('/programs') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              Programs
            </Link>
            <Link 
              to="/hospitals" 
              className={`hover:text-yellow-600 transition ${isActive('/hospitals') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              Hospitals
            </Link>
            <Link 
              to="/gallery" 
              className={`hover:text-yellow-600 transition ${isActive('/galler') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/news" 
              className={`hover:text-yellow-600 transition ${isActive('/news') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              News & Events
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-yellow-600 transition ${isActive('/about') ? 'text-yellow-600 font-semibold' : ''}`}
            >
              About
            </Link>
          </div>

          {/* Auth Section - Only show for logged-in users */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                {/* <span className="text-2x1 ">Welcome, {user.name}</span> */}
                {user.role === 'admin' && (
                  <Link to="/admin" className="bg-stone-300 hover:bg-stone-400 px-4 py-2 rounded transition">
                    Admin Dashboard
                  </Link>
                )}
                {user.role === 'hospital' && (
                  <Link to="/hospital-portal" className="bg-stone-300 hover:bg-stone-400 px-4 py-2 rounded transition">
                    Hospital Portal
                  </Link>
                )}
                <button 
                  onClick={logout}
                  className="bg-amber-100 hover:bg-amber-200 px-4 py-2 rounded transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              // No login/register buttons shown for public users
              <div className="text-2X1 text-STONE-200">
                WELCOME
              </div>
            )}
          </div>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;