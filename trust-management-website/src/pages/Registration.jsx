import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import RegistrationForm from '../components/registration/RegistrationForm';

const Registration = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect public users trying to access registration directly
    if (!user) {
      alert('Beneficiary registration is handled through trust administrators. Please contact the trust office for assistance.');
      navigate('/');
    }
  }, [user, navigate]);

  // Show nothing if no user is logged in (will redirect)
  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-blue-800 mb-2">
            Administrator Registration Portal
          </h2>
          <p className="text-blue-700">
            Use this form to register new beneficiaries into welfare programs. Public users cannot self-register.
          </p>
        </div>
        
        <h1 className="text-4xl font-bold text-center mb-2">Beneficiary Registration</h1>
        <p className="text-center text-gray-600 mb-8">
          Register new beneficiaries for welfare programs (Admin Access Only)
        </p>
        <RegistrationForm />
      </div>
    </div>
  );
};

export default Registration;