const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");
const { protect } = require("../middleware/authMiddleware");

// All budget routes are protected (require login)

// @route   GET /api/budget
// @desc    Get all expenses for logged-in user
// @access  Private
router.get("/", protect, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   POST /api/budget
// @desc    Add a new expense
// @access  Private
router.post("/", protect, async (req, res) => {
  const { title, amount } = req.body;

  if (!title || !amount) {
    return res.status(400).json({ message: "Title and amount are required" });
  }

  try {
    const expense = await Expense.create({
      user: req.user._id,
      title,
      amount: parseFloat(amount),
    });
    res.status(201).json(expense);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   PUT /api/budget/:id
// @desc    Update an expense
// @access  Private
router.put("/:id", protect, async (req, res) => {
  const { title, amount } = req.body;

  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    // Make sure the expense belongs to the logged-in user
    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    expense.title = title || expense.title;
    expense.amount = amount !== undefined ? parseFloat(amount) : expense.amount;

    const updated = await expense.save();
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// @route   DELETE /api/budget/:id
// @desc    Delete an expense
// @access  Private
router.delete("/:id", protect, async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    if (expense.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    await expense.deleteOne();
    res.json({ message: "Expense deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
