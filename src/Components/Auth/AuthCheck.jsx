import React from 'react';
import { Navigate } from 'react-router-dom';

export default function AuthCheck({ children }) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace="true" />;
  }
  return children;
}
