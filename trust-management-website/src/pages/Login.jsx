import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      // Mock user data based on email
      let userData = {};
      if (data.email.includes('admin')) {
        userData = { 
          name: 'Admin User', 
          role: 'admin', 
          email: data.email 
        };
      } else if (data.email.includes('hospital')) {
        userData = { 
          name: 'Hospital Staff', 
          role: 'hospital', 
          email: data.email 
        };
      } else {
        // Public users cannot login through this form
        alert('This login is only for registered administrators and hospital partners.');
        setIsLoading(false);
        return;
      }
      
      login(userData);
      setIsLoading(false);
      navigate('/');
    }, 1500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-Stone-600">
          Sri Ekadanta Charitable Trust Portal
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login for administrators and hospital partners
        </p>

        <div className="bg-green-100 border border-stone-500 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-stone-800 mb-2">Access Information:</h3>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• This portal is for authorized personnel only</li>
            <li>• Public users do not need to login</li>
            <li>• New users must register first with registration key</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="Enter your registered email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password *
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-stone-500"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="rounded border-gray-300 text-stone-600 focus:ring-stone-500" />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-sm text-stone-600 hover:text-stone-900">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-stone-500 hover:bg-stone-600 text-white py-3 rounded-lg font-semibold text-lg transition disabled:opacity-50"
          >
            {isLoading ? 'Signing In...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            New administrator or hospital partner?{' '}
            <Link to="/admin-register" className="text-amber-800 hover:text-amber-900 font-semibold">
              Register with your key
            </Link>
          </p>
        </div>

        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
          <h4 className="font-semibold mb-3 text-gray-700 text-center">Demo Access</h4>
          <div className="grid grid-cols-1 gap-3 text-sm">
            <div className="bg-white p-3 rounded border">
              <p className="font-medium text-stone-900">Admin Account</p>
              <p className="text-gray-600">Email: admin@trust.org</p>
              <p className="text-gray-600">Password: any password</p>
            </div>
            <div className="bg-white p-3 rounded border">
              <p className="font-medium text-stone-900">Hospital Account</p>
              <p className="text-gray-600">Email: hospital@partner.org</p>
              <p className="text-gray-600">Password: any password</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center border-t pt-6">
          <Link 
            to="/" 
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            ← Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;