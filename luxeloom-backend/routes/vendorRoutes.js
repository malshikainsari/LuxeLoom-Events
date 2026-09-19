const express = require("express");
const router = express.Router();
const Vendor = require("../models/Vendor");
const { protect } = require("../middleware/authMiddleware");

// @route   GET /api/vendors
// @desc    Get all vendors (with optional category filter & search)
// @access  Public
router.get("/", async (req, res) => {
  try {
    const { category, search } = req.query;
    let filter = {};

    if (category) filter.serviceType = category;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { serviceType: { $regex: search, $options: "i" } },
      ];
    }

    const vendors = await Vendor.find(filter).sort({ ratings: -1 });
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   GET /api/vendors/:id
// @desc    Get single vendor
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   POST /api/vendors/seed
// @desc    Seed vendor data from frontend into DB (run once)
// @access  Public (can be protected later)
router.post("/seed", async (req, res) => {
  try {
    const count = await Vendor.countDocuments();
    if (count > 0) {
      return res.json({ message: "Vendors already seeded", count });
    }

    const vendorData = [
      // Venues
      { name: "Shangri-La Colombo", serviceType: "Venues", description: "Luxury ballroom with a capacity of 500 guests.", priceRange: "$$$$", ratings: 4.9, reviews: 150 },
      { name: "Garden Pavilion", serviceType: "Venues", description: "Outdoor venue with scenic views and floral decorations.", priceRange: "$$$", ratings: 4.7, reviews: 90 },
      { name: "Skyline Rooftop", serviceType: "Venues", description: "Perfect city skyline view for your special event.", priceRange: "$$$$", ratings: 4.8, reviews: 120 },
      { name: "Lakeside Retreat", serviceType: "Venues", description: "A peaceful lakeside venue for weddings and parties.", priceRange: "$$", ratings: 4.6, reviews: 85 },
      { name: "Regal Hall", serviceType: "Venues", description: "Elegant and spacious hall with premium facilities.", priceRange: "$$$$", ratings: 4.9, reviews: 100 },
      { name: "Cozy Banquet", serviceType: "Venues", description: "Small and intimate venue for close gatherings.", priceRange: "$$", ratings: 4.5, reviews: 70 },
      // Catering
      { name: "Elite Catering", serviceType: "Catering", description: "Top-notch catering service for all events.", priceRange: "$$$", ratings: 4.5, reviews: 120 },
      { name: "Gourmet Delights", serviceType: "Catering", description: "Premium food options for high-end events.", priceRange: "$$$$", ratings: 4.8, reviews: 90 },
      { name: "Homey Tastes", serviceType: "Catering", description: "Homemade-style food with a warm touch.", priceRange: "$$", ratings: 4.6, reviews: 75 },
      { name: "Spice & Flavor", serviceType: "Catering", description: "Aromatic dishes inspired by global cuisine.", priceRange: "$$", ratings: 4.7, reviews: 110 },
      { name: "Vegan Bites", serviceType: "Catering", description: "Exclusive vegan and vegetarian event catering.", priceRange: "$$$", ratings: 4.8, reviews: 95 },
      { name: "BBQ Masters", serviceType: "Catering", description: "Smoky BBQ flavors for outdoor events.", priceRange: "$$", ratings: 4.5, reviews: 60 },
      // Photographers
      { name: "Photography Pros", serviceType: "Photographers", description: "Professional wedding and event photography.", priceRange: "$$", ratings: 4.8, reviews: 80 },
      { name: "Golden Lens", serviceType: "Photographers", description: "Capturing magical moments with expertise.", priceRange: "$$$", ratings: 4.9, reviews: 120 },
      { name: "Candid Clicks", serviceType: "Photographers", description: "Candid shots that tell a story.", priceRange: "$$", ratings: 4.6, reviews: 90 },
      { name: "Studio Glow", serviceType: "Photographers", description: "High-quality studio and event photography.", priceRange: "$$$", ratings: 4.7, reviews: 100 },
      { name: "Vintage Frames", serviceType: "Photographers", description: "Timeless and artistic photography.", priceRange: "$$$", ratings: 4.7, reviews: 85 },
      { name: "Dream Snaps", serviceType: "Photographers", description: "Wedding photography with a dreamy aesthetic.", priceRange: "$$", ratings: 4.5, reviews: 75 },
      // DJs
      { name: "DJ Max", serviceType: "DJs", description: "High-energy beats for your event.", priceRange: "$$$", ratings: 4.8, reviews: 95 },
      { name: "Retro Vibes", serviceType: "DJs", description: "Classic hits and retro mixes.", priceRange: "$$", ratings: 4.6, reviews: 75 },
      { name: "Electro King", serviceType: "DJs", description: "Electronic and dance music specialist.", priceRange: "$$$$", ratings: 4.9, reviews: 110 },
      { name: "Night Party Pro", serviceType: "DJs", description: "Keeping the party alive all night.", priceRange: "$$$", ratings: 4.7, reviews: 85 },
      { name: "Mix Master", serviceType: "DJs", description: "Expert in mashups and seamless transitions.", priceRange: "$$", ratings: 4.5, reviews: 60 },
      { name: "Club DJ", serviceType: "DJs", description: "Best DJ for clubbing-style parties.", priceRange: "$$$$", ratings: 4.9, reviews: 100 },
      // Bakery
      { name: "Sweet Treats", serviceType: "Bakery", description: "Delicious cakes and pastries.", priceRange: "$$", ratings: 4.8, reviews: 100 },
      { name: "Elegant Cakes", serviceType: "Bakery", description: "Custom cakes for any occasion.", priceRange: "$$$", ratings: 4.9, reviews: 90 },
      { name: "Choco Bliss", serviceType: "Bakery", description: "Chocolate-based desserts and cakes.", priceRange: "$$", ratings: 4.7, reviews: 80 },
      { name: "Vegan Bakes", serviceType: "Bakery", description: "Tasty vegan bakery items.", priceRange: "$$", ratings: 4.6, reviews: 75 },
      { name: "French Delights", serviceType: "Bakery", description: "Authentic French bakery goods.", priceRange: "$$$$", ratings: 4.9, reviews: 85 },
      { name: "Cupcake Heaven", serviceType: "Bakery", description: "Cupcakes in a variety of flavors.", priceRange: "$$", ratings: 4.7, reviews: 65 },
      // Florists
      { name: "Bloom & Bliss", serviceType: "Florists", description: "Elegant floral arrangements for all occasions.", priceRange: "$$$", ratings: 4.9, reviews: 120 },
      { name: "Petal Perfection", serviceType: "Florists", description: "Custom floral designs with fresh seasonal flowers.", priceRange: "$$", ratings: 4.7, reviews: 95 },
      { name: "Floral Fantasy", serviceType: "Florists", description: "Luxury flower decorations for weddings and events.", priceRange: "$$$$", ratings: 4.8, reviews: 110 },
      { name: "Rosewood Florals", serviceType: "Florists", description: "Classic rose arrangements and bouquets.", priceRange: "$$", ratings: 4.6, reviews: 85 },
      { name: "Garden Charm", serviceType: "Florists", description: "Rustic and natural floral arrangements.", priceRange: "$$", ratings: 4.7, reviews: 90 },
      { name: "EverBloom", serviceType: "Florists", description: "Preserved and long-lasting floral decorations.", priceRange: "$$$", ratings: 4.8, reviews: 100 },
    ];

    await Vendor.insertMany(vendorData);
    res.status(201).json({ message: "Vendors seeded successfully", count: vendorData.length });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
