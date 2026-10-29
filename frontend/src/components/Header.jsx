import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi";

const Header = ({ activePage }) => {
  const mainPages = ["home", "features", "about"];
  const isMainPage = mainPages.includes(activePage);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate("/signup");
  };

  return (
    <header className="w-full bg-[#F5F5DC] shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-14 py-4">

        {isMainPage ? (
          <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-14">
            <Link to="/" className={`text-sm sm:text-base font-bold transition ${activePage === "home" ? "text-[#C78141]" : "text-black hover:text-[#C78141]"}`}>HOME</Link>
            <Link to="/features" className={`text-sm sm:text-base font-bold transition ${activePage === "features" ? "text-[#C78141]" : "text-black hover:text-[#C78141]"}`}>FEATURES</Link>
            <Link to="/about" className={`text-sm sm:text-base font-bold transition ${activePage === "about" ? "text-[#C78141]" : "text-black hover:text-[#C78141]"}`}>ABOUT</Link>
          </div>

        ) : (
          <>
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link to="/dashboard" className="text-[#C78141] font-bold text-base sm:text-lg shrink-0">
                LuxeLoom
              </Link>

              {/* Desktop Nav Links */}
              <div className="hidden md:flex items-center gap-6 lg:gap-10">
                <Link to="/themegenerator" className={`text-xs lg:text-sm font-bold transition ${activePage === "themegenerator" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>THEME GENERATOR</Link>
                <Link to="/vendor" className={`text-xs lg:text-sm font-bold transition ${activePage === "vendor" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>VENDORS</Link>
                <Link to="/budgettracker" className={`text-xs lg:text-sm font-bold transition ${activePage === "budgettracker" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>BUDGET TRACKER</Link>
              </div>

              {/* User + Logout + Hamburger */}
              <div className="flex items-center gap-3">
                {user && (
                  <>
                    <span className="text-sm text-gray-700 font-medium hidden lg:block">
                      {user.displayName || user.email?.split("@")[0]}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="hidden md:block text-xs sm:text-sm bg-[#C4A484] hover:bg-[#5D3A1A] text-white px-4 py-1.5 rounded-full transition"
                    >
                      Logout
                    </button>
                  </>
                )}
                <button
                  className="md:hidden text-gray-800 hover:text-[#C78141] transition"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                </button>
              </div>

            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
              <div className="md:hidden mt-3 flex flex-col gap-3 pb-2 border-t border-gray-200 pt-3">
                <Link to="/themegenerator" onClick={() => setMenuOpen(false)} className={`text-sm font-bold transition ${activePage === "themegenerator" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>THEME GENERATOR</Link>
                <Link to="/vendor" onClick={() => setMenuOpen(false)} className={`text-sm font-bold transition ${activePage === "vendor" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>VENDORS</Link>
                <Link to="/budgettracker" onClick={() => setMenuOpen(false)} className={`text-sm font-bold transition ${activePage === "budgettracker" ? "text-[#C78141]" : "text-gray-800 hover:text-[#C78141]"}`}>BUDGET TRACKER</Link>
                {user && (
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200">
                    <span className="text-sm text-gray-600">{user.displayName || user.email?.split("@")[0]}</span>
                    <button onClick={handleLogout} className="text-sm bg-[#C4A484] hover:bg-[#5D3A1A] text-white px-4 py-1.5 rounded-full transition">Logout</button>
                  </div>
                )}
              </div>
            )}
          </>
        )}

      </nav>
    </header>
  );
};

export default Header;
