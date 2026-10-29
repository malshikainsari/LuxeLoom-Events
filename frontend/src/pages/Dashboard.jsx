import React from "react";
import { motion } from "framer-motion";
import { RiGalleryView2 } from "react-icons/ri";
import { TbMapPinSearch } from "react-icons/tb";
import { PiCalculatorBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const displayName = user?.displayName || user?.email?.split("@")[0] || "there";

  const handleNavigate = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/signup");
  };

  return (
    <div className="min-h-screen bg-[#A88B65]">

      {/* Header */}
      <header className="w-full bg-[#A88B65] px-4 sm:px-8 py-5">
        <nav className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-3">

          {/* Nav Links */}
          <div className="flex items-center gap-5 sm:gap-8 flex-wrap">
            <a href="/" className="text-gray-800 hover:text-[#B43B26] font-bold text-sm sm:text-base transition">
              HOME
            </a>
            <a href="/dashboard" className="text-white font-bold text-sm sm:text-base">
              DASHBOARD
            </a>
            <a href="/about" className="text-gray-800 hover:text-[#B43B26] font-bold text-sm sm:text-base transition">
              ABOUT
            </a>
          </div>

          {/* User + Logout */}
          <div className="flex items-center gap-3">
            <span className="text-white text-sm font-medium hidden sm:block">
              Hi, {displayName} 👋
            </span>
            <button
              onClick={handleLogout}
              className="text-sm bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-full transition"
            >
              Logout
            </button>
          </div>

        </nav>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-10">

        <motion.h1
          className="text-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome, {displayName}! Your next big event is just a few clicks away.
          <br className="hidden sm:block" />
          {" "}Let's get started!
        </motion.h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Event Theme Generator */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <RiGalleryView2 className="text-2xl text-[#A88B65]" />
              <h2 className="text-base sm:text-lg font-bold text-black">Event Theme Generator</h2>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Create Your Perfect Event Theme</h3>
            <img
              src="/src/Pictures/theme.jpg"
              alt="Event Theme Generator"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base mb-4 text-gray-700">
              Discover AI-crafted event themes that perfectly match your vision, budget, and guest list.
            </p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A] text-sm sm:text-base transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("/themegenerator")}
            >
              Start Designing
            </motion.button>
          </motion.div>

          {/* Vendor Marketplace */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <TbMapPinSearch className="text-2xl text-[#A88B65]" />
              <h2 className="text-base sm:text-lg font-bold text-black">Vendor Marketplace</h2>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Find Your Perfect Vendor</h3>
            <img
              src="/src/Pictures/vendor.jpg"
              alt="Vendor Marketplace"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base mb-4 text-gray-700">
              Browse and book verified vendors for your event needs, from caterers to photographers.
            </p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A] text-sm sm:text-base transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("/vendor")}
            >
              Explore Vendors
            </motion.button>
          </motion.div>

          {/* Budget Tracker */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-5 sm:p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <PiCalculatorBold className="text-2xl text-[#A88B65]" />
              <h2 className="text-base sm:text-lg font-bold text-black">Budget Tracker</h2>
            </div>
            <h3 className="text-base sm:text-lg font-semibold mb-3">Manage Your Event Budget</h3>
            <img
              src="/src/Pictures/budget.jpg"
              alt="Budget Tracker"
              className="w-full h-40 sm:h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-sm sm:text-base mb-4 text-gray-700">
              Plan smarter with a dynamic budget tracker that updates as you finalize vendors and costs.
            </p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A] text-sm sm:text-base transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("/budgettracker")}
            >
              Start Tracking
            </motion.button>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
