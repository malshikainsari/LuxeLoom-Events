const mongoose = require("mongoose");

const savedThemeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    eventType: { type: String, required: true },
    guests: { type: Number, required: true },
    budget: { type: Number, required: true },
    eventDate: { type: Date },
    location: { type: String, default: "" },
    themeImageUrl: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavedTheme", savedThemeSchema);
