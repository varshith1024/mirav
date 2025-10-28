import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const selectedCategory = watch('category');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Registration submitted successfully! You will receive a confirmation email shortly.');
      console.log('Registration data:', data);
      
      // Reset form after successful submission
      setTimeout(() => {
        setSubmitMessage('');
        window.location.href = '/';
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error submitting registration. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">
        Welfare Program Registration
      </h2>
      
      {submitMessage && (
        <div className={`p-4 mb-6 rounded ${
          submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
        }`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                {...register('fullName', { required: 'Full name is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date of Birth *
              </label>
              <input
                type="date"
                {...register('dob', { required: 'Date of birth is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.dob && (
                <p className="text-red-500 text-sm mt-1">{errors.dob.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gender *
              </label>
              <select
                {...register('gender', { required: 'Gender is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Aadhaar Number *
              </label>
              <input
                type="text"
                {...register('aadhaar', { 
                  required: 'Aadhaar number is required',
                  pattern: {
                    value: /^[0-9]{12}$/,
                    message: 'Please enter a valid 12-digit Aadhaar number'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 12-digit Aadhaar number"
              />
              {errors.aadhaar && (
                <p className="text-red-500 text-sm mt-1">{errors.aadhaar.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                {...register('phone', { 
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number'
                  }
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter 10-digit phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Address Information */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Address Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Address *
              </label>
              <textarea
                {...register('address', { required: 'Address is required' })}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your complete address"
              ></textarea>
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City *
                </label>
                <input
                  type="text"
                  {...register('city', { required: 'City is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State *
                </label>
                <input
                  type="text"
                  {...register('state', { required: 'State is required' })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter state"
                />
                {errors.state && (
                  <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PIN Code *
                </label>
                <input
                  type="text"
                  {...register('pincode', { 
                    required: 'PIN code is required',
                    pattern: {
                      value: /^[0-9]{6}$/,
                      message: 'Please enter a valid 6-digit PIN code'
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter PIN code"
                />
                {errors.pincode && (
                  <p className="text-red-500 text-sm mt-1">{errors.pincode.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Program Selection */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Program Selection</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Program Category *
            </label>
            <select
              {...register('category', { required: 'Please select a category' })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Category</option>
              <option value="farmer">Farmer Assistance Program</option>
              <option value="student">Student Sponsorship</option>
              <option value="welfare">Family Welfare Scheme</option>
              <option value="healthcare">Healthcare Concession</option>
            </select>
            {errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>
            )}
          </div>

          {/* Category-specific fields */}
          {selectedCategory === 'farmer' && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Land Size (acres)
                </label>
                <input
                  type="number"
                  {...register('landSize')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter land size"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crop Type
                </label>
                <input
                  type="text"
                  {...register('cropType')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter main crop type"
                />
              </div>
            </div>
          )}

          {selectedCategory === 'student' && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Educational Institution
                </label>
                <input
                  type="text"
                  {...register('institution')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter institution name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Course/Class
                </label>
                <input
                  type="text"
                  {...register('course')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter course or class"
                />
              </div>
            </div>
          )}
        </div>

        {/* Documents Upload */}
        <div className="border-b border-gray-200 pb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Required Documents</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Aadhaar Card *
              </label>
              <input
                type="file"
                {...register('aadhaarFile', { required: 'Aadhaar card is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".pdf,.jpg,.jpeg,.png"
              />
              {errors.aadhaarFile && (
                <p className="text-red-500 text-sm mt-1">{errors.aadhaarFile.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Upload Income Certificate *
              </label>
              <input
                type="file"
                {...register('incomeCertificate', { required: 'Income certificate is required' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                accept=".pdf,.jpg,.jpeg,.png"
              />
              {errors.incomeCertificate && (
                <p className="text-red-500 text-sm mt-1">{errors.incomeCertificate.message}</p>
              )}
            </div>

            {selectedCategory === 'farmer' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Land Documents
                </label>
                <input
                  type="file"
                  {...register('landDocuments')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            )}

            {selectedCategory === 'student' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Student ID/Bonafide Certificate
                </label>
                <input
                  type="file"
                  {...register('studentId')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: PDF, JPG, PNG (Max file size: 2MB each)
          </p>
        </div>

        {/* Declaration */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-start">
            <input
              type="checkbox"
              {...register('declaration', { required: 'You must accept the declaration' })}
              className="mt-1 mr-3 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <label className="text-sm text-gray-700">
              I hereby declare that all the information provided above is true and correct to the best of my knowledge. 
              I understand that any false information may lead to cancellation of my registration.
            </label>
          </div>
          {errors.declaration && (
            <p className="text-red-500 text-sm mt-2">{errors.declaration.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg font-semibold text-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Registration'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;