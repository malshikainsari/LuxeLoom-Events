import React from "react";
import { motion } from "framer-motion";
import { CgProfile } from "react-icons/cg";
import { RiGalleryView2 } from "react-icons/ri";
import { TbMapPinSearch } from "react-icons/tb";
import { PiCalculatorBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    window.scrollTo(0, 0); // Ensure navigation starts at the top of the page
    navigate(path);
  };

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="w-full h-[850px] bg-[#A88B65] p-10 flex flex-col">
        {/* Navigation */}
        <nav className="flex justify-between items-center pb-6">
          <h1 className="text-black text-2xl font-bold">LOGO</h1>
          <div className="space-x-8 text-lg flex">
            <a href="http://localhost:5173/" className="text-gray-800 hover:text-[#B43B26] font-bold">HOME</a>
            <a href="#" className="text-white hover:text-[#B43B26] font-bold">DASHBOARD</a>
            <a href="#" className="text-gray-800 hover:text-[#B43B26] font-bold">ABOUT</a>
          </div>
          <CgProfile className="text-3xl text-black hover:text-[#B43B26] cursor-pointer" />
        </nav>

        {/* Main Content */}
        <motion.h1
          className="text-center py-12 px-4 text-white text-3xl lg:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome! Your next big event is just a few clicks away.<br />Let’s get started!
        </motion.h1>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
          {/* Event Theme Generator */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-5 mb-4">
              <RiGalleryView2 className="text-2xl text-[#A88B65]" />
              <h2 className="text-lg font-bold text-black">Event Theme Generator</h2>
            </div>
            <h3 className="text-lg font-semibold mb-4">Create Your Perfect Event Theme</h3>
            <img src="/src/Pictures/theme.jpg" alt="Event Theme Generator" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-base mb-4">Discover AI-crafted event themes that perfectly match your vision, budget, and guest list.</p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("/themegenerator")}
            >
              Start Designing
            </motion.button>
          </motion.div>

          {/* Vendor Marketplace */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center space-x-5 mb-4">
              <TbMapPinSearch className="text-2xl text-[#A88B65]" />
              <h2 className="text-lg font-bold text-black">Vendor Marketplace</h2>
            </div>
            <h3 className="text-lg font-semibold mb-4">Find Your Perfect Vendor</h3>
            <img src="/src/Pictures/vendor.jpg" alt="Vendor Marketplace" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-base mb-4">Browse and book verified vendors for your event needs, from caterers to photographers.</p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavigate("/vendor")}
            >
              Explore Vendors
            </motion.button>
          </motion.div>

          {/* Budget Tracker */}
          <motion.div
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center space-x-5 mb-4">
              <PiCalculatorBold className="text-2xl text-[#A88B65]" />
              <h2 className="text-lg font-bold text-black">Budget Tracker</h2>
            </div>
            <h3 className="text-lg font-semibold mb-4">Manage Your Event Budget</h3>
            <img src="/src/Pictures/budget.jpg" alt="Budget Tracker" className="w-full h-48 object-cover rounded-lg mb-4" />
            <p className="text-base mb-4">Plan smarter with a dynamic budget tracker that updates as you finalize vendors and costs.</p>
            <motion.button
              className="bg-[#A05E41] text-white rounded-full px-6 py-2 w-full hover:bg-[#8B4F3A]"
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