import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import homeImage from "../Pictures/home.jpg";

const HomePage = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#F5F5DC]">

      <section className="relative min-h-screen flex">

        {/* Left Cream Section */}
        <div className="w-full md:w-[66%] min-h-screen bg-[#F5F5DC] relative z-10">

          {/* Navbar */}
          <nav className="absolute top-0 left-0 w-full flex justify-center pt-7 sm:pt-8 z-30">
            <div className="flex items-center gap-8 sm:gap-12 lg:gap-16">
              <Link to="/" className="text-[#B43B26] text-sm sm:text-base font-bold">
                HOME
              </Link>
              <Link to="/features" className="text-gray-900 text-sm sm:text-base font-bold hover:text-[#B43B26] transition">
                FEATURES
              </Link>
              <Link to="/about" className="text-gray-900 text-sm sm:text-base font-bold hover:text-[#B43B26] transition">
                ABOUT
              </Link>
            </div>
          </nav>

          {/* Content */}
          <div className="min-h-screen flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24 pt-24 pb-12">

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl xl:text-[82px] font-bold text-[#8B0000] font-[Marcellus] leading-none"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              LUXELOOM
            </motion.h1>

            <motion.h2
              className="mt-5 text-xl sm:text-2xl md:text-3xl text-[#FF4500] font-bold font-[Marcellus]"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              Making Your Event Beautiful
            </motion.h2>

            <motion.p
              className="mt-7 w-full max-w-[580px] text-gray-900 text-sm sm:text-base md:text-lg leading-7 md:leading-8"
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            >
              Planning an event has never been easier than with Luxeloom.
              With our AI-powered theme generator, a marketplace of trusted
              vendors, and a budget tracker that updates in real time, your
              event is in safe hands. Whether it's your wedding, birthday,
              or any special occasion, we're here to guide you every step
              of the way.
            </motion.p>

            <motion.button
              onClick={handleGetStarted}
              className="mt-8 w-[160px] sm:w-[180px] h-[48px] bg-[#C4A484] text-white font-bold text-sm sm:text-base rounded-md shadow-md hover:bg-[#5D3A1A] transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            >
              Get Started
            </motion.button>

          </div>
        </div>

        {/* Right Brown Section — hidden on mobile */}
        <div className="hidden md:block absolute right-0 top-0 w-[34%] min-h-screen bg-[#C4A484]">
          <motion.img
            src={homeImage}
            alt="Wedding Couple"
            className="absolute z-20 top-[9%] left-[-35%] sm:left-[-30%] lg:left-[-25%] w-[135%] sm:w-[130%] lg:w-[120%] h-auto object-contain shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
          />
        </div>

      </section>
    </div>
  );
};

export default HomePage;
