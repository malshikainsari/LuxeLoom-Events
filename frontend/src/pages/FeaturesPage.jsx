import React from "react";
import {
  FaMagic,
  FaStore,
  FaWallet,
  FaCalendarAlt,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";

import Header from "../components/Header";

const FeaturesPage = () => {
  const features = [
    {
      icon: <FaMagic />,
      title: "AI-Powered Theme Generator",
      description:
        "Generate creative and personalized event theme ideas based on your event type, preferences, and style.",
    },
    {
      icon: <FaStore />,
      title: "Vendor Marketplace",
      description:
        "Discover and explore trusted vendors for photography, catering, decorations, venues, and other event services.",
    },
    {
      icon: <FaWallet />,
      title: "Budget Tracker",
      description:
        "Keep track of your event expenses and manage your budget in one convenient place.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Event Planning",
      description:
        "Organize important event details and make your planning process simple and structured.",
    },
    {
      icon: <FaUsers />,
      title: "Trusted Vendors",
      description:
        "Find suitable service providers and explore vendor information before making your decisions.",
    },
    {
      icon: <FaChartLine />,
      title: "Budget Overview",
      description:
        "Get a clear overview of your spending and monitor your event budget more effectively.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5DC]">

      {/* Header */}
      <Header activePage="features" />

      {/* Hero */}
      <section className="bg-[#C4A484] py-20 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-white font-[Marcellus]">
          Our Features
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-white/90 text-lg leading-7">
          Everything you need to make your event planning easier,
          organized, and beautiful.
        </p>
      </section>

      {/* Features */}
      <section className="px-6 sm:px-10 lg:px-20 py-20">

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="
                bg-white
                rounded-2xl
                p-8
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              <div className="
                w-16 h-16
                rounded-full
                bg-[#C4A484]
                flex items-center justify-center
                text-white text-2xl mb-6
              ">
                {feature.icon}
              </div>

              <h2 className="text-xl font-bold text-[#8B0000] mb-4">
                {feature.title}
              </h2>

              <p className="text-gray-700 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* Bottom */}
      <section className="bg-[#5D3A1A] px-6 py-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white font-[Marcellus]">
          Plan. Create. Celebrate.
        </h2>

        <p className="mt-4 text-white/80 max-w-2xl mx-auto">
          LuxeLoom brings the essential tools for event planning together
          in one place.
        </p>
      </section>

    </div>
  );
};

export default FeaturesPage;