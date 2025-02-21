import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Auth';

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/started" />;
};
export const ProtectedRouteAdmin = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/adminlogin" />;
};


