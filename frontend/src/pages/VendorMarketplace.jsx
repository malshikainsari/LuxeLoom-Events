import React, { useState, useEffect } from "react";
import Header from "../components/Header";

const API = "http://localhost:5000/api";

const VendorMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const categories = ["Venues", "Catering", "Photographers", "DJs", "Bakery", "Florists"];

  // Fetch vendors from backend
  useEffect(() => {
    const fetchVendors = async () => {
      setLoading(true);
      setError("");
      try {
        let url = `${API}/vendors`;
        const params = new URLSearchParams();
        if (selectedCategory) params.append("category", selectedCategory);
        if (searchQuery) params.append("search", searchQuery);
        if (params.toString()) url += `?${params.toString()}`;

        const res = await fetch(url);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setVendors(data);
      } catch (err) {
        setError("Failed to load vendors. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(fetchVendors, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  // Seed vendors on first load if empty
  useEffect(() => {
    const seedVendors = async () => {
      try {
        await fetch(`${API}/vendors/seed`, { method: "POST" });
      } catch (_) {}
    };
    seedVendors();
  }, []);

  return (
    <div className="w-full min-h-[850px] bg-[#F5F5DC] p-10 flex flex-col">
      <Header activePage="vendor" />

      {/* Title & Search */}
      <div className="flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold text-[#FF4500] mt-12">Vendor Marketplace</h1>
        <div className="mt-8 flex items-center w-[50%] bg-white p-2 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search vendors..."
            className="w-full text-lg outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-gray-400 hover:text-gray-600 px-2 text-xl"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Categories */}
      <div className="mt-10 flex justify-center flex-wrap gap-4 w-full">
        <button
          className={`font-bold py-3 px-6 rounded-lg shadow-md transition w-[150px] ${
            !selectedCategory
              ? "bg-[#8B5A2B] text-white"
              : "bg-[#C4A484] text-white hover:bg-[#8B5A2B]"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All
        </button>
        {categories.map((category, index) => (
          <button
            key={index}
            className={`font-bold py-3 px-6 rounded-lg shadow-md transition w-[150px] ${
              selectedCategory === category
                ? "bg-[#8B5A2B] text-white"
                : "bg-[#C4A484] text-white hover:bg-[#8B5A2B]"
            }`}
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Vendor Listings */}
      <div className="mt-10 w-full">
        {loading ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-[#8B5A2B] text-lg font-medium animate-pulse">Loading vendors...</p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-red-500 text-lg">{error}</p>
          </div>
        ) : vendors.length === 0 ? (
          <div className="flex justify-center items-center h-48">
            <p className="text-[#8B5A2B] text-lg">No vendors found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {vendors.map((vendor, index) => (
              <div
                key={vendor._id || index}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
              >
                <div className="w-full h-32 bg-[#F5F5DC] rounded-lg mb-2 flex items-center justify-center text-4xl">
                  {vendor.serviceType === "Venues" && "🏛️"}
                  {vendor.serviceType === "Catering" && "🍽️"}
                  {vendor.serviceType === "Photographers" && "📸"}
                  {vendor.serviceType === "DJs" && "🎵"}
                  {vendor.serviceType === "Bakery" && "🎂"}
                  {vendor.serviceType === "Florists" && "💐"}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{vendor.name}</h3>
                  <p className="text-sm text-[#A88B65] font-medium">{vendor.serviceType}</p>
                  <p className="text-gray-700 mt-1 text-sm">{vendor.description}</p>
                  <p className="mt-1 text-sm">Price: {vendor.priceRange}</p>
                  <p className="mt-1 text-sm">
                    ⭐ {vendor.ratings} ({vendor.reviews} reviews)
                  </p>
                </div>
                <div className="mt-3 flex justify-between">
                  <button className="py-1 px-3 bg-[#C78141] text-white rounded-lg text-sm hover:bg-[#A05E41] transition">
                    View Profile
                  </button>
                  <button className="py-1 px-3 bg-[#8B5A2B] text-white rounded-lg text-sm hover:bg-[#6B3F1A] transition">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorMarketplace;
