import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { loginUser } from "../services/authService";

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    // ✅ Call backend login API
    const response = await loginUser(data.email, data.password);

    if (response.error) {
      setErrorMessage(response.error);
      setIsLoading(false);
      return;
    }

    // ✅ Allow ONLY Admin & Hospital
    if (response.user.role_id !== 1 && response.user.role_id !== 2) {
      setErrorMessage("This portal is only for administrators and hospital partners.");
      setIsLoading(false);
      return;
    }

    // ✅ Prepare user data for context
    const userData = {
      id: response.user.id,
      name: response.user.full_name,
      email: response.user.email,
      role: response.user.role_id === 1 ? "admin" : "hospital"
    };

    // ✅ Save to AuthContext (with tokens)
    login(
      userData,
      response.accessToken,
      response.refreshToken
    );

    setIsLoading(false);

    // ✅ Redirect by role
    if (userData.role === "admin") {
      navigate("/admin-dashboard");
    } else {
      navigate("/hospital-dashboard");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-2 text-stone-600">
          Sri Ekadanta Charitable Trust Portal
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Login for administrators and hospital partners
        </p>

        <div className="bg-green-100 border border-stone-500 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-stone-800 mb-2">Access Information:</h3>
          <ul className="text-sm text-stone-700 space-y-1">
            <li>• This portal is for authorized personnel only</li>
            <li>• Public users cannot login</li>
            <li>• Only Admins and Hospital partners</li>
          </ul>
        </div>

        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">Email Address *</label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-2">Password *</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-stone-500 hover:bg-stone-600 text-white py-3 rounded-lg"
          >
            {isLoading ? 'Signing In...' : 'Sign In to Portal'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            New administrator or hospital partner?{" "}
            <Link to="/admin-register" className="text-amber-800 font-semibold">
              Register with your key
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
