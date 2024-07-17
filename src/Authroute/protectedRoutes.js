import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/started" />;
};

export default ProtectedRoute;
