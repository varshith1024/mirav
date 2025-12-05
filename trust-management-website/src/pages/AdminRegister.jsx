import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { registerAdminOrHospital } from "../services/authService";

const AdminRegister = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const userType = watch('userType');

  // ===========================
  // ✅ REAL SUBMIT HANDLER
  // ===========================
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // ✅ Send data to backend API
      const response = await registerAdminOrHospital({
        full_name: data.fullName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        userType: data.userType,
        registrationKey: data.registrationKey,
        hospitalName: data.hospitalName || null
      });

      if (response.error) {
        setSubmitMessage(`❌ ${response.error}`);
      } else {
        setSubmitMessage('✅ Registration successful! Redirecting to login...');
        
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }

    } catch (error) {
      setSubmitMessage('❌ Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-stone-600">
          Administrator & Partner Registration
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Register for trust management or hospital partner access
        </p>

        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-amber-800 mb-2">Registration Requirements:</h3>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• <strong>Admins:</strong> Contact system administrator for key</li>
            <li>• <strong>Hospital Partners:</strong> Contact system administrator for key</li>
            <li>• After registration, you can login with your credentials</li>
          </ul>
        </div>

        {submitMessage && (
          <div className={`p-4 mb-6 rounded ${
            submitMessage.includes('❌') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
          }`}>
            {submitMessage}
          </div>
        )}

        {/* ✅ FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* User Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select User Type *
            </label>
            <select
              {...register('userType', { required: 'Please select user type' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Type</option>
              <option value="Admin">Trust Administrator</option>
              <option value="Hospital">Hospital Partner</option>
            </select>
            {errors.userType && <p className="text-red-500 text-sm">{errors.userType.message}</p>}
          </div>

          {/* Registration Key */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Registration Key *
            </label>
            <input
              type="password"
              {...register('registrationKey', { required: 'Registration key is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter registration key"
            />
            {errors.registrationKey && <p className="text-red-500 text-sm">{errors.registrationKey.message}</p>}
          </div>

          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
          </div>

          {/* Hospital Name (visible only if hospital) */}
          {userType === 'Hospital' && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Hospital Name *
              </label>
              <input
                type="text"
                {...register('hospitalName', { required: 'Hospital name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Enter hospital name"
              />
              {errors.hospitalName && <p className="text-red-500 text-sm">{errors.hospitalName.message}</p>}
            </div>
          )}

          {/* Password + Confirm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password *
              </label>
              <input
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Create password"
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                {...register('confirmPassword', {
                  required: 'Please confirm password',
                  validate: value => value === watch('password') || 'Passwords do not match'
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Confirm password"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-stone-500 hover:bg-stone-600 text-white px-8 py-3 rounded-lg"
            >
              {isSubmitting ? 'Registering...' : 'Register Account'}
            </button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-amber-800 font-semibold">Login here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
