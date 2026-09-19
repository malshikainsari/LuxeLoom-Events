import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5DC]">

      {/* Header */}
      <Header activePage="about" />

      {/* Hero */}
      <section className="bg-[#C4A484] py-20 px-6 text-center">

        <h1 className="text-4xl sm:text-5xl font-bold text-white font-[Marcellus]">
          About LuxeLoom
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-white/90 text-lg leading-7">
          Making event planning simple, creative, and beautiful.
        </p>

      </section>


      {/* About Content */}
      <section className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#8B0000] font-[Marcellus]">
              What is LuxeLoom?
            </h2>

            <p className="mt-6 text-gray-700 leading-8">
              LuxeLoom is an event planning platform designed to make
              organizing special occasions easier and more convenient.
              It brings important event planning tools together in one
              place.
            </p>

            <p className="mt-5 text-gray-700 leading-8">
              Users can explore event themes, discover vendors, manage
              their budgets, and organize important event details through
              a simple and user-friendly platform.
            </p>

          </div>


          {/* Right */}
          <div className="bg-[#C4A484] rounded-2xl p-8 sm:p-10 shadow-xl">

            <h3 className="text-2xl font-bold text-white font-[Marcellus]">
              Our Vision
            </h3>

            <p className="mt-5 text-white/90 leading-8">
              Our vision is to create a simple and enjoyable digital
              experience that helps people plan memorable events without
              unnecessary complexity.
            </p>

          </div>

        </div>

      </section>


      {/* Mission */}
      <section className="bg-[#5D3A1A] px-6 py-16 text-center">

        <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Marcellus]">
          Plan. Create. Celebrate.
        </h2>

        <p className="mt-5 max-w-2xl mx-auto text-white/80 leading-7">
          LuxeLoom brings creativity, planning tools, vendors, and
          budgeting together to make every event easier to organize.
        </p>

      </section>

    </div>
  );
};

export default AboutPage;