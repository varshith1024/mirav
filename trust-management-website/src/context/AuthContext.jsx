import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in (from localStorage)
    const savedUser = localStorage.getItem('trustUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const userWithRole = {
      ...userData,
      // Ensure user has proper role
      role: userData.role || (userData.email.includes('admin') ? 'admin' : 
            userData.email.includes('hospital') ? 'hospital' : 'public')
    };
    setUser(userWithRole);
    localStorage.setItem('trustUser', JSON.stringify(userWithRole));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('trustUser');
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};