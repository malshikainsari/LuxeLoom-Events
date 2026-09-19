const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const themeRoutes = require("./routes/themeRoutes");

const app = express();

// Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/vendors", vendorRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/themes", themeRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({ message: "LuxeLoom API is running 🎉" });
});

// MongoDB connection + server start
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
