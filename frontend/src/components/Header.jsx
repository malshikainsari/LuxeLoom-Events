import React from "react";
import { Link } from "react-router-dom";

const Header = ({ activePage }) => {
  const mainPages = ["home", "features", "about"];

  const isMainPage = mainPages.includes(activePage);

  return (
    <header className="w-full bg-[#F5F5DC]">
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 py-6">

        {isMainPage ? (

          /* HOME / FEATURES / ABOUT */
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-6 sm:gap-10 md:gap-14">

              <Link
                to="/"
                className={`text-sm sm:text-base md:text-lg font-bold ${
                  activePage === "home"
                    ? "text-[#C78141]"
                    : "text-black hover:text-[#C78141]"
                }`}
              >
                HOME
              </Link>

              <Link
                to="/features"
                className={`text-sm sm:text-base md:text-lg font-bold ${
                  activePage === "features"
                    ? "text-[#C78141]"
                    : "text-black hover:text-[#C78141]"
                }`}
              >
                FEATURES
              </Link>

              <Link
                to="/about"
                className={`text-sm sm:text-base md:text-lg font-bold ${
                  activePage === "about"
                    ? "text-[#C78141]"
                    : "text-black hover:text-[#C78141]"
                }`}
              >
                ABOUT
              </Link>

            </div>
          </div>

        ) : (

          /* THEME / VENDOR / BUDGET */
          <div className="flex items-center justify-center">

            <div className="flex items-center gap-5 sm:gap-8 md:gap-12">

              <Link
                to="/themegenerator"
                className={`text-xs sm:text-sm md:text-base font-bold ${
                  activePage === "themegenerator"
                    ? "text-[#C78141]"
                    : "text-gray-800 hover:text-[#C78141]"
                }`}
              >
                EVENT THEME GENERATOR
              </Link>

              <Link
                to="/vendor"
                className={`text-xs sm:text-sm md:text-base font-bold ${
                  activePage === "vendor"
                    ? "text-[#C78141]"
                    : "text-gray-800 hover:text-[#C78141]"
                }`}
              >
                VENDOR MARKETPLACE
              </Link>

              <Link
                to="/budgettracker"
                className={`text-xs sm:text-sm md:text-base font-bold ${
                  activePage === "budgettracker"
                    ? "text-[#C78141]"
                    : "text-gray-800 hover:text-[#C78141]"
                }`}
              >
                BUDGET TRACKER
              </Link>

            </div>

          </div>

        )}

      </nav>
    </header>
  );
};

export default Header;