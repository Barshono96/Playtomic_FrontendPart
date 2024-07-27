// src/components/ProtectedRoute.tsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  element: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const token = localStorage.getItem('token');
  
  // Check if the token exists
  const isAuthenticated = !!token;

  if (!isAuthenticated) {
    // Redirect to sign-in if not authenticated
    return <Navigate to="/signin" />;
  }

  // Render the element if authenticated
  return element;
};

export default ProtectedRoute;
