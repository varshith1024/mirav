import React from "react";

const MedicalCampPopup = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      
      {/* Popup Card */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeIn">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black text-2xl font-bold"
        >
          ×
        </button>

        {/* Image Section */}
        <div className="w-full h-56 bg-gray-100">
          <img
            src="https://ashahospitals.co/upload/2022/06/camp2.jpeg"
            alt="Medical Camp"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <h2 className="text-3xl font-bold text-stone-700 mb-4">
            Free Medical Camp
          </h2>

          <p className="text-gray-600 mb-2">
            Organized by
          </p>

          <h3 className="text-xl font-semibold text-amber-700 mb-4">
            Sri Ekadanta Charitable Trust
          </h3>

          <p className="text-gray-600 mb-2">
            In partnership with
          </p>

          <h3 className="text-xl font-semibold text-green-700 mb-6">
            Hrudaya Multispeciality Hospital
          </h3>

          {/* Date Box */}
          <div className="inline-flex items-center gap-3 bg-green-100 text-green-800 px-6 py-3 rounded-lg font-semibold mb-6">
            📅 28th December 2025
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-8">
            Free health checkups and medical consultations for the community.
            All are welcome to attend and benefit from expert doctors.
          </p>

          {/* Action */}
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalCampPopup;
