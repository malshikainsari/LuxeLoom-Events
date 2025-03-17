import React from "react";
import loginImage from "../Pictures/login.jpg";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom"; // Import Link

const SignUp = () => {
  return (
    <div
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      {/* Main Box */}
      <div className="bg-[rgba(193,154,107,0.65)] p-8 rounded-lg max-w-md w-full ml-20 absolute left-[10%] h-[500px] flex flex-col justify-evenly">
         {/* Tabs */}
         <div className="relative">
          <div className="flex justify-between text-white">
            <button className="w-1/2 text-center py-2 bg-[rgba(93,58,26)] font-bold rounded-tl-lg">
              Sign up
            </button>
            {/* Link to SignIn page */}
            <Link to="/signin" className="w-1/2 text-center py-2 bg-[rgba(93,58,26)] font-bold rounded-tr-lg opacity-70 hover:opacity-100">
              Sign in
            </Link>
          </div>
          {/* White Divider Bar */}
          <div className="bg-white h-[2px] shadow-md"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col justify-evenly h-full">
          {/* User Name */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-black mb-2"
            >
              User Name
            </label>
            <div className="relative">
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 rounded-lg shadow-sm border focus:outline-none focus:ring focus:ring-[#e6d0c7] text-gray-800"
                placeholder="Enter your username"
              />
              <span className="absolute inset-y-0 right-3 flex items-center text-black">
              <CgProfile />
              </span>
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black mb-2"
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

          {/* Remember Me and Forget Password */}
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center text-black">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a
              href="#"
              className="text-sm text-black hover:underline focus:outline-none"
            >
              Forget Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-white/50 text-[#a3644e] py-2 rounded-lg font-semibold shadow-lg hover:bg-[rgba(93,58,26,1)] transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="mb-2 absolute top-[450px] left-[25%] text-sm text-white">
          Don't have an account?{" "}
          <a href="#" className="text-[#e6d0c7] hover:underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
