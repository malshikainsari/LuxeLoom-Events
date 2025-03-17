import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import FeaturesPage from './pages/FeaturesPage'; // Add your page component here
import Dashboard from './pages/Dashboard';
import EventThemeGenerator from './pages/EventThemeGenerator';
import VendorMarketplace from './pages/VendorMarketplace';
import BudgetTracker from './pages/BudgetTracker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/themegenerator" element={<EventThemeGenerator />} />
        <Route path="/vendor" element={<VendorMarketplace />} />
        <Route path="/budgettracker" element={<BudgetTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
