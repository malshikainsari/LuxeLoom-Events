import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; // Import framer-motion for animations
import homeImage from "../Pictures/home.jpg"; // Make sure the path is correct

import Dashboard from "./Dashboard";

const HomePage = () => {
  const [showDashboard, setShowDashboard] = useState(false); // State to control Dashboard visibility
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/dashboard"); // Navigate to the dashboard
    window.scrollTo(0, 0); // Ensure page scrolls to the top after navigation
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled past a certain point (e.g., 100px)
      if (window.scrollY > 100) {
        setShowDashboard(true); // Show dashboard when scroll position is greater than 100px
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Home Section */}
      <div className="flex h-[795px]">
        {/* Left Section */}
        <div className="w-[889px] bg-[#F5F5DC] p-10 flex flex-col">
          {/* Navigation */}
          <nav className="flex justify-between items-center pb-6">
            <h1 className="text-black text-2xl font-bold absolute top-[7%] left-[5%]">LOGO</h1>
            <div className="space-x-8 text-lg">
              <a
                href="#"
                className="text-[#B43B26] hover:text-gray-800 font-bold absolute left-[30%]"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#B43B26] font-bold absolute left-[40%]"
              >
                FEATURES
              </a>
              <a
                href="#"
                className="text-gray-800 hover:text-[#B43B26] font-bold absolute left-[52%]"
              >
                ABOUT
              </a>
            </div>
          </nav>

          {/* Content */}
          <div className="flex flex-col justify-center flex-grow">
            {/* Animated Title */}
            <motion.h1
              className="text-7xl font-bold text-[#8B0000] absolute top-[200px] left-[11%] font-[Marcellus]"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              LUXELOOM
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.h2
              className="text-3xl text-[#FF4500] mt-2 absolute top-[300px] left-[13%] font-bold font-[Marcellus]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            >
              Making Your Event Beautiful
            </motion.h2>

            {/* Animated Paragraph */}
            <motion.p
              className="mt-6 text-gray-900 text-justify text-lg leading-relaxed absolute top-[380px] left-[8%] max-w-[40%] font-semi bold"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            >
              Planning an event has never been easier than with Luxeloom. With our
              AI-powered theme generator, a marketplace of trusted vendors, and
              a budget tracker that updates in real time, your event is in safe
              hands. Whether it’s your wedding, birthday, or any special
              occasion, we’re here to guide you every step of the way.
            </motion.p>

            {/* Animated Button */}
            <motion.button
              onClick={handleGetStarted}
              className="mt-120 absolute left-[20%] w-[200px] h-[50px] bg-[#C4A484] text-white font-bold rounded-lg shadow-md hover:bg-[#5D3A1A] transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-[623px] bg-[#C4A484] relative flex items-center justify-center">
          <motion.img
            src={homeImage}
            alt="Wedding Couple"
            className="absolute top-[120px] left-[30%] transform -translate-x-1/2 w-[450px] h-auto shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
          />
        </div>
      </div>

      {/* Dashboard Section */}
      {showDashboard && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Dashboard />
        </motion.div>
      )}
    </div>
  );
};

export default HomePage;
