import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const selectedCategory = watch('category');

  // ✅ REAL BACKEND SUBMIT
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const res = await fetch(
        "http://localhost:4000/api/beneficiary/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        }
      );

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Submission failed");
      }

      setSubmitMessage(
        "Registration submitted successfully! You will be contacted soon."
      );

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);

    } catch (error) {
      setSubmitMessage("Error submitting registration. Please try again.");
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
          submitMessage.includes('Error')
            ? 'bg-red-100 text-red-700'
            : 'bg-green-100 text-green-700'
        }`}>
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        {/* Personal Information */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-4">Personal Information</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Full Name"
              {...register('fullName', { required: true })}
              className="input"
            />
            <input
              type="date"
              {...register('dob', { required: true })}
              className="input"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <select {...register('gender', { required: true })} className="input">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <input
              placeholder="Aadhaar Number"
              {...register('aadhaar', { required: true })}
              className="input"
            />
          </div>
        </div>

        {/* Contact */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              placeholder="Email"
              {...register('email', { required: true })}
              className="input"
            />
            <input
              placeholder="Phone"
              {...register('phone', { required: true })}
              className="input"
            />
          </div>
        </div>

        {/* Address */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-4">Address</h3>

          <textarea
            placeholder="Full Address"
            {...register('address', { required: true })}
            className="input"
          />

          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <input placeholder="City" {...register('city', { required: true })} className="input" />
            <input placeholder="State" {...register('state', { required: true })} className="input" />
            <input placeholder="PIN Code" {...register('pincode', { required: true })} className="input" />
          </div>
        </div>

        {/* Program */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-4">Program</h3>

          <select {...register('category', { required: true })} className="input">
            <option value="">Select Category</option>
            <option value="farmer">Farmer</option>
            <option value="student">Student</option>
            <option value="welfare">Welfare</option>
            <option value="healthcare">Healthcare</option>
          </select>

          {selectedCategory === 'farmer' && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <input placeholder="Land Size" {...register('landSize')} className="input" />
              <input placeholder="Crop Type" {...register('cropType')} className="input" />
            </div>
          )}

          {selectedCategory === 'student' && (
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <input placeholder="Institution" {...register('institution')} className="input" />
              <input placeholder="Course" {...register('course')} className="input" />
            </div>
          )}
        </div>

        {/* Document Numbers */}
        <div className="border-b pb-6">
          <h3 className="text-xl font-semibold mb-4">Document Information</h3>

          <input
            placeholder="Income Certificate Number"
            {...register('incomeCertificateNo', { required: true })}
            className="input"
          />

          {selectedCategory === 'farmer' && (
            <input
              placeholder="Land Document Number"
              {...register('landDocumentNo')}
              className="input mt-4"
            />
          )}

          {selectedCategory === 'student' && (
            <input
              placeholder="Student ID Number"
              {...register('studentIdNo')}
              className="input mt-4"
            />
          )}
        </div>

        {/* Declaration */}
        <div className="bg-blue-50 p-4 rounded">
          <label className="flex items-start gap-2">
            <input type="checkbox" {...register('declaration', { required: true })} />
            <span>I declare that the above information is true.</span>
          </label>
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 rounded-lg"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
          </button>
        </div>

      </form>
    </div>
  );
};

export default RegistrationForm;
