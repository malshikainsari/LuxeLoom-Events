const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    serviceType: {
      type: String,
      required: true,
      enum: ["Venues", "Catering", "Photographers", "DJs", "Bakery", "Florists"],
    },
    description: { type: String, required: true },
    priceRange: {
      type: String,
      enum: ["$", "$$", "$$$", "$$$$"],
      required: true,
    },
    ratings: { type: Number, default: 0, min: 0, max: 5 },
    reviews: { type: Number, default: 0 },
    image: { type: String, default: "" },
    available: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
