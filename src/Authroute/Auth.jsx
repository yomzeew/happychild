import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [tokenExpiration, setTokenExpiration] = useState(null);
  const navigate=useNavigate()

  const login = (token) => {
    const expiresIn = 3600; // Token validity in seconds (e.g., 1 hour)
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString()); // Store as string
    setIsAuthenticated(true);
    setTokenExpiration(expirationTime);
    navigate('/dashboard');
  };

  const loginAdmin = (token) => {
    const expiresIn = 3600; // Token validity in seconds (e.g., 1 hour)
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    localStorage.setItem('token', token);
    localStorage.setItem('tokenExpiration', expirationTime.toString()); // Store as string
    setIsAuthenticated(true);
    setTokenExpiration(expirationTime);
    navigate('/dashboardadmin');
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
    setIsAuthenticated(false);
    navigate('/started')
  };

  useEffect(() => {
    const checkTokenExpiration = () => {
      const expiration = parseInt(localStorage.getItem('tokenExpiration'), 10); // Parse to number
      if (expiration && new Date().getTime() > expiration) {
        console.log('Token expired, logging out.');
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000); // Check every 60 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const expiration = parseInt(localStorage.getItem('tokenExpiration'), 10); // Parse to number
    if (token && expiration && new Date().getTime() < expiration) {
      console.log('Token is valid, setting authenticated state.');
      setIsAuthenticated(true);
      setTokenExpiration(expiration);
    } else {
      console.log('No valid token found, logging out.');
      setIsAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,loginAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
