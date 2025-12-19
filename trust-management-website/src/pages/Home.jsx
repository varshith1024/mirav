import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/home/HeroSlider';
import VolunteerPopup from '../components/home/VolunteerPopup';
import MedicalCampPopup from '../components/MedicalCampPopup';

const Home = () => {
  // ✅ Control Medical Camp Popup
  const [showMedicalCamp, setShowMedicalCamp] = useState(true);

  return (
    <div>

      {/* ✅ Medical Camp Full Screen Popup */}
      {showMedicalCamp && (
        <MedicalCampPopup onClose={() => setShowMedicalCamp(false)} />
      )}

      {/* Volunteer Registration Popup */}
      <VolunteerPopup />

      {/* Hero Section with Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="card">
              <h3 className="text-4xl font-bold text-stone-600 mb-2">1,000+</h3>
              <p className="text-gray-600">Farmers Assisted</p>
            </div>
            <div className="card">
              <h3 className="text-4xl font-bold text-green-700 mb-2">500+</h3>
              <p className="text-gray-600">Students Sponsored</p>
            </div>
            <div className="card">
              <h3 className="text-4xl font-bold text-stone-600 mb-2">50+</h3>
              <p className="text-gray-600">Partner Hospitals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Programs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👨‍🌾</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Farmer Assistance
              </h3>
              <p className="text-gray-600">
                Support for farmers with subsidies, equipment, and healthcare benefits.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Student Sponsorships
              </h3>
              <p className="text-gray-600">
                Financial aid and mentorship programs for deserving students.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">
                Healthcare
              </h3>
              <p className="text-gray-600">
                Medical concessions and healthcare services through partner hospitals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-green-100 text-stone-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8">
            Join our welfare programs and get the support you need
          </p>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/programs"
              className="bg-green-400 text-white hover:bg-green-500 px-8 py-3 rounded-lg text-lg font-semibold transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
