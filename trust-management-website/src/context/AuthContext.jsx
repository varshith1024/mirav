import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load user on refresh
  useEffect(() => {
    const savedUser = localStorage.getItem("trustUser");
    const token = localStorage.getItem("accessToken");

    if (savedUser && token) {
      setUser(JSON.parse(savedUser));
    }

    setLoading(false);
  }, []);

  // ✅ LOGIN (called after backend success)
  const login = (userData, accessToken, refreshToken) => {
    setUser(userData);

    localStorage.setItem("trustUser", JSON.stringify(userData));
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
  };

  // ✅ LOGOUT (NO navigation here)
  const logout = () => {
    setUser(null);
    localStorage.removeItem("trustUser");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    // ❌ NO navigate() here (this caused error)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
