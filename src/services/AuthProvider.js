
import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Simulate user authentication with useEffect
  useEffect(() => {
    // Check if the user is already authenticated (e.g., by checking a token in local storage)
    const authenticatedUser = localStorage.getItem('user');

    if (authenticatedUser) {
      setUser(JSON.parse(authenticatedUser));
    }
  }, []);

  const login = (userData) => {
    // Simulate a login request to your backend
    // In a real application, this would involve sending a request and handling the response
    // For now, we'll just set the user data in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    // Simulate a logout action by removing the user data from local storage
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
