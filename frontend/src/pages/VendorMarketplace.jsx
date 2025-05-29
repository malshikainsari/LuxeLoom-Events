import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import Header from "../components/Header";

const VendorMarketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = ["Venues", "Catering", "Photographers", "DJs", "Bakery", "Florists"];

  const vendors = [
    // Venues
    { name: "Shangri-La Colombo", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "Luxury ballroom with a capacity of 500 guests.", priceRange: "$$$$", ratings: 4.9, reviews: 150 },
    { name: "Garden Pavilion", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "Outdoor venue with scenic views and floral decorations.", priceRange: "$$$", ratings: 4.7, reviews: 90 },
    { name: "Skyline Rooftop", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "Perfect city skyline view for your special event.", priceRange: "$$$$", ratings: 4.8, reviews: 120 },
    { name: "Lakeside Retreat", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "A peaceful lakeside venue for weddings and parties.", priceRange: "$$", ratings: 4.6, reviews: 85 },
    { name: "Regal Hall", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "Elegant and spacious hall with premium facilities.", priceRange: "$$$$", ratings: 4.9, reviews: 100 },
    { name: "Cozy Banquet", image: "https://via.placeholder.com/150", serviceType: "Venues", description: "Small and intimate venue for close gatherings.", priceRange: "$$", ratings: 4.5, reviews: 70 },

    // Catering
    { name: "Elite Catering", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Top-notch catering service for all events.", priceRange: "$$$", ratings: 4.5, reviews: 120 },
    { name: "Gourmet Delights", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Premium food options for high-end events.", priceRange: "$$$$", ratings: 4.8, reviews: 90 },
    { name: "Homey Tastes", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Homemade-style food with a warm touch.", priceRange: "$$", ratings: 4.6, reviews: 75 },
    { name: "Spice & Flavor", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Aromatic dishes inspired by global cuisine.", priceRange: "$$", ratings: 4.7, reviews: 110 },
    { name: "Vegan Bites", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Exclusive vegan and vegetarian event catering.", priceRange: "$$$", ratings: 4.8, reviews: 95 },
    { name: "BBQ Masters", image: "https://via.placeholder.com/150", serviceType: "Catering", description: "Smoky BBQ flavors for outdoor events.", priceRange: "$$", ratings: 4.5, reviews: 60 },


    { name: "Photography Pros", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "Professional wedding and event photography.", priceRange: "$$", ratings: 4.8, reviews: 80 },
    { name: "Golden Lens", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "Capturing magical moments with expertise.", priceRange: "$$$", ratings: 4.9, reviews: 120 },
    { name: "Candid Clicks", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "Candid shots that tell a story.", priceRange: "$$", ratings: 4.6, reviews: 90 },
    { name: "Studio Glow", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "High-quality studio and event photography.", priceRange: "$$$", ratings: 4.7, reviews: 100 },
    { name: "Vintage Frames", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "Timeless and artistic photography.", priceRange: "$$$", ratings: 4.7, reviews: 85 },
    { name: "Dream Snaps", image: "https://via.placeholder.com/150", serviceType: "Photographers", description: "Wedding photography with a dreamy aesthetic.", priceRange: "$$", ratings: 4.5, reviews: 75 },

    { name: "DJ Max", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "High-energy beats for your event.", priceRange: "$$$", ratings: 4.8, reviews: 95 },
    { name: "Retro Vibes", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "Classic hits and retro mixes.", priceRange: "$$", ratings: 4.6, reviews: 75 },
    { name: "Electro King", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "Electronic and dance music specialist.", priceRange: "$$$$", ratings: 4.9, reviews: 110 },
    { name: "Night Party Pro", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "Keeping the party alive all night.", priceRange: "$$$", ratings: 4.7, reviews: 85 },
    { name: "Mix Master", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "Expert in mashups and seamless transitions.", priceRange: "$$", ratings: 4.5, reviews: 60 },
    { name: "Club DJ", image: "https://via.placeholder.com/150", serviceType: "DJs", description: "Best DJ for clubbing-style parties.", priceRange: "$$$$", ratings: 4.9, reviews: 100 },
    
    { name: "Sweet Treats", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Delicious cakes and pastries.", priceRange: "$$", ratings: 4.8, reviews: 100 },
    { name: "Elegant Cakes", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Custom cakes for any occasion.", priceRange: "$$$", ratings: 4.9, reviews: 90 },
    { name: "Choco Bliss", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Chocolate-based desserts and cakes.", priceRange: "$$", ratings: 4.7, reviews: 80 },
    { name: "Vegan Bakes", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Tasty vegan bakery items.", priceRange: "$$", ratings: 4.6, reviews: 75 },
    { name: "French Delights", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Authentic French bakery goods.", priceRange: "$$$$", ratings: 4.9, reviews: 85 },
    { name: "Cupcake Heaven", image: "https://via.placeholder.com/150", serviceType: "Bakery", description: "Cupcakes in a variety of flavors.", priceRange: "$$", ratings: 4.7, reviews: 65 },
 
    { name: "Bloom & Bliss", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Elegant floral arrangements for all occasions.", priceRange: "$$$", ratings: 4.9, reviews: 120 },
    { name: "Petal Perfection", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Custom floral designs with fresh seasonal flowers.", priceRange: "$$", ratings: 4.7, reviews: 95 },
    { name: "Floral Fantasy", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Luxury flower decorations for weddings and events.", priceRange: "$$$$", ratings: 4.8, reviews: 110 },
    { name: "Rosewood Florals", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Classic rose arrangements and bouquets.", priceRange: "$$", ratings: 4.6, reviews: 85 },
    { name: "Garden Charm", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Rustic and natural floral arrangements.", priceRange: "$$", ratings: 4.7, reviews: 90 },
    { name: "EverBloom", image: "https://via.placeholder.com/150", serviceType: "Florists", description: "Preserved and long-lasting floral decorations.", priceRange: "$$$", ratings: 4.8, reviews: 100 },
  ];

  const filteredVendors = selectedCategory
    ? vendors.filter((vendor) => vendor.serviceType === selectedCategory)
    : vendors;

  return (
    <div className="w-full h-[850px] bg-[#F5F5DC] p-10 flex flex-col">
      {/* Navigation - Replaced with Header component */}
      <Header activePage="vendor" />

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-[#FF4500] ml-6 mt-12">Vendor Marketplace</h1>
      
      {/* Search Bar */}
      <div className="mt-8 flex items-center w-[50%] bg-white p-2 rounded-lg shadow-md ml-6">
        <input 
          type="text" 
          placeholder="Search vendors..." 
          className="w-full text-lg outline-none" 
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Vendor Categories */}
      <div className="mt-10 flex justify-center space-x-6 w-full">
  {categories.map((category, index) => (
    <button
      key={index}
      className={`bg-[#C4A484] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#8B5A2B] transition ${
        selectedCategory === category ? "bg-[#C78141]" : ""
      } w-[200px]`} // Ensure all buttons have the same width
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </button>
  ))}
</div>


     {/* Vendor Listings */}
<div className="mt-10 w-full flex justify-evenly
">
  <div className="grid grid-cols-4 gap-6">
    {filteredVendors
      .filter((vendor) =>
        vendor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vendor.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map((vendor, index) => (
        <div
          key={index}
          className="w-[250px] bg-white p-4 rounded-lg shadow-md flex flex-col justify-between"
        >
          <img
            src={vendor.image}
            alt={vendor.name}
            className="w-full h-32 object-cover rounded-lg mb-2"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold">{vendor.name}</h3>
            <p className="text-sm">{vendor.serviceType}</p>
            <p className="text-gray-700 mt-1 text-sm">{vendor.description}</p>
            <p className="mt-1 text-sm">Price: {vendor.priceRange}</p>
            <p className="mt-1 text-sm">Rating: {vendor.ratings} ({vendor.reviews} reviews)</p>
          </div>
          <div className="mt-3 flex justify-between">
            <button className="py-1 px-3 bg-[#C78141] text-white rounded-lg text-sm">View Profile</button>
            <button className="py-1 px-3 bg-[#8B5A2B] text-white rounded-lg text-sm">Book Now</button>
          </div>
        </div>
      ))}
  </div>
</div>

      </div>
    
  );
};

export default VendorMarketplace;
