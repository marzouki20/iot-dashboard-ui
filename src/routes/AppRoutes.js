import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import MainPage from '../pages/dashboard/MainPage';
import DashboardLayout from '../components/layout/DashboardLayout';

export default function AppRoutes() {
  // Check if user is logged in based on localStorage
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  return (
    <Routes>
      {/* Auth Routes */}
      <Route
        path="/login"
        element={<Login />} // Force login component here
      />
      <Route
        path="/register"
        element={<Register />}
      />
      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      {/* Dashboard Routes */}
      <Route path="/dashboard" element={isAuthenticated ? <DashboardLayout /> : <Navigate to="/login" />}>
        <Route index element={<MainPage />} />
        {/* Add more nested dashboard routes here if needed, e.g.: */}
        {/* <Route path="add-device" element={<AddDevicePage />} /> */}
        {/* <Route path="data" element={<DataPage />} /> */}
        {/* <Route path="alerts" element={<AlertsPage />} /> */}
        {/* <Route path="settings" element={<SettingsPage />} /> */}
      </Route>

      {/* Redirect root to login page by default, or dashboard if authenticated */}
      <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Login />} // Force login at root if not authenticated
      />

      {/* Catch all route - redirect to login if not authenticated */}
      <Route 
        path="*" 
        element={isAuthenticated ? <Navigate to="/dashboard" /> : <Navigate to="/login" />} 
      />
    </Routes>
  );
}
