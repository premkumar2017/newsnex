// src/components/ProtectedRoute.js
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // Redirect to login if not authenticated
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
