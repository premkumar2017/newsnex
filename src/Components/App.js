// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import Newsapp from './Newsapp';
import Feedback from './Feedback';
import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Newsapp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/feedback"  element={<Feedback />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
