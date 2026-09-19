import React from "react";
import loginImage from "../Pictures/login.jpg";
import { CgProfile } from "react-icons/cg";
import { TbLockPassword } from "react-icons/tb";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="w-full max-w-md bg-[rgba(193,154,107,0.85)] p-6 sm:p-8 rounded-xl shadow-2xl">

        {/* Tabs */}
        <div className="flex text-white">
          <button className="w-1/2 py-3 bg-[#5D3A1A] font-bold rounded-tl-lg">
            Sign Up
          </button>

          <Link
            to="/signin"
            className="w-1/2 text-center py-3 bg-[#5D3A1A] font-bold rounded-tr-lg opacity-70 hover:opacity-100 transition"
          >
            Sign In
          </Link>
        </div>

        <div className="bg-white h-[2px]" />

        {/* Form */}
        <form className="mt-6 space-y-5">

          {/* Username */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              User Name
            </label>

            <div className="relative">
              <input
                type="text"
                placeholder="Enter your username"
                className="w-full px-4 py-3 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#e6d0c7]"
              />

              <CgProfile className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl" />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#e6d0c7]"
              />

              <TbLockPassword className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl" />
            </div>
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-black">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>

            <button
              type="button"
              className="text-black hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign Up */}
          <button
            type="submit"
            className="w-full bg-white/70 text-[#a3644e] py-3 rounded-lg font-bold shadow-lg hover:bg-[#5D3A1A] hover:text-white transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-6">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-[#e6d0c7] font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUp;