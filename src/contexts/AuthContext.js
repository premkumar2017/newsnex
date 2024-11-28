import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('auth_token');
    const storedUserName = localStorage.getItem('user_name'); // Ensure 'user_name' is being fetched
    if (token && storedUserName) {
      setIsAuthenticated(true);
      setUserName(storedUserName); // Update state with the username
    }
  }, []);

  const login = (token, name) => {
    localStorage.setItem('auth_token', token);
    localStorage.setItem('user_name', name); // Store username in localStorage
    setIsAuthenticated(true);
    setUserName(name); // Update the username state
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_name'); // Clear username from localStorage
    setIsAuthenticated(false);
    setUserName('');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
