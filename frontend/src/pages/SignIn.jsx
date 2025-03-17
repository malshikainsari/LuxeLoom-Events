import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../Pictures/login.jpg";
import { CgProfile } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";

const SignIn = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle sign up button click
  const handleSignUpClick = () => {
    navigate("/signup"); 
  };

  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      {/* Main Box */}
      <div className="bg-[rgba(193,154,107,0.65)] p-6 rounded-lg max-w-md w-full ml-20 absolute left-[10%] h-[500px] flex flex-col justify-between">
        {/* Tabs */}
        <div className="relative mb-4">
          <div className="flex justify-between text-white">
            <button
              className="w-1/2 text-center py-2 bg-[rgba(93,58,26)] font-bold rounded-tl-lg opacity-70 hover:opacity-100"
              onClick={handleSignUpClick} // Link to signup page
            >
              Sign Up
            </button>

            <button className="w-1/2 text-center py-2 bg-[rgba(93,58,26)] font-bold rounded-tr-lg">
              Sign In
            </button>
          </div>
          {/* White Divider Bar */}
          <div className="bg-white h-[2px] shadow-md"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4 flex-grow justify-between">
          {/* Input Fields */}
          <div className="flex flex-col gap-4">
            {/* First Name */}
            <div>
              <label
                htmlFor="firstname"
                className="block text-sm font-semibold text-black mb-1"
              >
                First Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstname"
                  className="w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none focus:ring focus:ring-[#e6d0c7] text-gray-800"
                  placeholder="Enter your first name"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-black">
                  <CgProfile />
                </span>
              </div>
            </div>

            {/* Last Name */}
            <div>
              <label
                htmlFor="lastname"
                className="block text-sm font-semibold text-black mb-1"
              >
                Last Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastname"
                  className="w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none focus:ring focus:ring-[#e6d0c7] text-gray-800"
                  placeholder="Enter your last name"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-black">
                  <CgProfile />
                </span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-black mb-1"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none focus:ring focus:ring-[#e6d0c7] text-gray-800"
                  placeholder="Enter your email"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-black">
                  <AiOutlineMail />
                </span>
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-black mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none focus:ring focus:ring-[#e6d0c7] text-gray-800"
                  placeholder="Enter your password"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-black">
                  <TbLockPassword />
                </span>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-black">
              I accept the{" "}
              <Link
                to="/terms"
                className="underline hover:text-grey-400"
              >
                terms and conditions
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-auto w-full bg-white/50 text-[#a3644e] py-2 rounded-lg font-semibold shadow-lg hover:bg-[rgba(93,58,26,1)] transition duration-200"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
