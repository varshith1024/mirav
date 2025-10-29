import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Volunteer = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const navigate = useNavigate();

  const selectedInterests = watch('interests');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitMessage('Thank you for your interest in volunteering! We will contact you soon.');
      
      // Reset form after successful submission
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      setSubmitMessage('Error submitting volunteer form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-stone-600 mb-4">Join as a Volunteer</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Help us make a difference in the community. Share your time and skills to support our welfare programs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Volunteer Info */}
          <div className="lg:col-span-1">
            <div className="bg-green-50 rounded-lg p-6 sticky top-4">
              <h3 className="text-xl font-semibold text-amber-800 mb-4">Volunteer Opportunities</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Field work and distribution</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Teaching and student mentoring</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Medical camp assistance</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Event organization</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Administrative support</span>
                </div>
                <div className="flex items-start">
                  <span className="text-amber-800 mr-2">•</span>
                  <span className="text-gray-700">Community outreach</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border">
                <h4 className="font-semibold text-gray-800 mb-2">Benefits</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Certificate of appreciation</li>
                  <li>• Skill development</li>
                  <li>• Community impact</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Volunteer Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              {submitMessage && (
                <div className={`p-4 mb-6 rounded ${
                  submitMessage.includes('Error') ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
                }`}>
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
                    )}
                  </div>

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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="1234567890"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Occupation
                    </label>
                    <input
                      type="text"
                      {...register('occupation')}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your profession"
                    />
                  </div>
                </div>

                {/* Volunteer Interests */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Areas of Interest (Select all that apply) *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Field Work & Distribution',
                      'Teaching & Mentoring', 
                      'Medical Camp Support',
                      'Event Organization',
                      'Administrative Work',
                      'Community Outreach',
                      'Fundraising',
                      'Technical Support'
                    ].map((interest) => (
                      <label key={interest} className="flex items-center">
                        <input
                          type="checkbox"
                          value={interest}
                          {...register('interests', { required: 'Please select at least one area of interest' })}
                          className="rounded border-gray-300 text-orange-600 focus:ring-orange-500"
                        />
                        <span className="ml-2 text-sm text-gray-700">{interest}</span>
                      </label>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-red-500 text-sm mt-1">{errors.interests.message}</p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability *
                  </label>
                  <select
                    {...register('availability', { required: 'Please select availability' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends</option>
                    <option value="weekdays">Weekdays</option>
                    <option value="evenings">Evenings</option>
                    <option value="flexible">Flexible</option>
                    <option value="fulltime">Full-time</option>
                  </select>
                  {errors.availability && (
                    <p className="text-red-500 text-sm mt-1">{errors.availability.message}</p>
                  )}
                </div>

                {/* Experience & Skills */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Skills & Experience
                  </label>
                  <textarea
                    {...register('skills')}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us about your skills, experience, or why you want to volunteer..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-stone-500 hover:bg-stone-600 text-white px-12 py-3 rounded-lg font-semibold text-lg transition disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Volunteer Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;