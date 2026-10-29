import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import EventThemeGenerator from "./pages/EventThemeGenerator";
import VendorMarketplace from "./pages/VendorMarketplace";
import BudgetTracker from "./pages/BudgetTracker";
import AboutPage from "./pages/AboutPage";
import FeaturesPage from "./pages/FeaturesPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />

          {/* Protected routes — login required */}
          <Route path="/dashboard" element={
            <ProtectedRoute><Dashboard /></ProtectedRoute>
          } />
          <Route path="/themegenerator" element={
            <ProtectedRoute><EventThemeGenerator /></ProtectedRoute>
          } />
          <Route path="/vendor" element={
            <ProtectedRoute><VendorMarketplace /></ProtectedRoute>
          } />
          <Route path="/budgettracker" element={
            <ProtectedRoute><BudgetTracker /></ProtectedRoute>
          } />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
