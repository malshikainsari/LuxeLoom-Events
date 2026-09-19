import React from "react";
import { useNavigate } from "react-router-dom";
import loginImage from "../Pictures/login.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { TbLockPassword } from "react-icons/tb";

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 py-8"
      style={{ backgroundImage: `url(${loginImage})` }}
    >
      <div className="w-full max-w-md bg-[rgba(193,154,107,0.85)] p-6 sm:p-8 rounded-xl shadow-2xl">

        {/* Tabs */}
        <div className="flex text-white">
          <button
            onClick={() => navigate("/signup")}
            className="w-1/2 py-3 bg-[#5D3A1A] font-bold rounded-tl-lg opacity-70 hover:opacity-100 transition"
          >
            Sign Up
          </button>

          <button
            className="w-1/2 py-3 bg-[#5D3A1A] font-bold rounded-tr-lg"
          >
            Sign In
          </button>
        </div>

        <div className="bg-white h-[2px]" />

        {/* Form */}
        <form className="mt-6 space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-black mb-2">
              Email
            </label>

            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 pr-10 rounded-lg border focus:outline-none focus:ring-2 focus:ring-[#e6d0c7]"
              />

              <AiOutlineMail className="absolute right-3 top-1/2 -translate-y-1/2 text-black text-xl" />
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

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white/70 text-[#a3644e] py-3 rounded-lg font-bold shadow-lg hover:bg-[#5D3A1A] hover:text-white transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-white mt-6">
          Don't have an account?{" "}
          <button
            onClick={() => navigate("/signup")}
            className="text-[#e6d0c7] font-semibold hover:underline"
          >
            Create one
          </button>
        </p>

      </div>
    </div>
  );
};

export default SignIn;