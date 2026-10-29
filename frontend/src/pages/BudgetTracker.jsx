import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Header from "../components/Header";
import { useAuth } from "../context/AuthContext";

const API = "http://localhost:5000/api";
const COLORS = ["#A88B65", "#F5CBA7", "#D98880", "#82E0AA", "#85C1E9"];

const BudgetTracker = () => {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ title: "", amount: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Get Firebase token
  const getToken = async () => {
    if (!user) return null;
    return await user.getIdToken();
  };

  // Fetch expenses from backend
  useEffect(() => {
    const fetchExpenses = async () => {
      setLoading(true);
      try {
        const token = await getToken();
        const res = await fetch(`${API}/budget`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setExpenses(data);
      } catch (err) {
        setError("Failed to load expenses.");
      } finally {
        setLoading(false);
      }
    };
    if (user) fetchExpenses();
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
  };

  const addExpense = async () => {
    if (!formData.title || !formData.amount) return;
    setSaving(true);
    setError("");
    try {
      const token = await getToken();

      if (isEditing) {
        // Update existing
        const res = await fetch(`${API}/budget/${editingId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setExpenses(expenses.map((e) => (e._id === editingId ? data : e)));
        setIsEditing(false);
        setEditingId(null);
      } else {
        // Add new
        const res = await fetch(`${API}/budget`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message);
        setExpenses([data, ...expenses]);
      }
      setFormData({ title: "", amount: "" });
    } catch (err) {
      setError("Failed to save expense. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const editExpense = (expense) => {
    setFormData({ title: expense.title, amount: expense.amount });
    setIsEditing(true);
    setEditingId(expense._id);
  };

  const deleteExpense = async (id) => {
    try {
      const token = await getToken();
      const res = await fetch(`${API}/budget/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error();
      setExpenses(expenses.filter((e) => e._id !== id));
    } catch {
      setError("Failed to delete expense.");
    }
  };

  const totalAmount = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="w-full min-h-[850px] bg-[#F5F5DC] p-10 flex flex-col">
      <Header activePage="budgettracker" />

      <h1 className="text-3xl font-bold text-[#FF4500] text-center mt-12">Budget Tracker</h1>

      {loading ? (
        <div className="flex justify-center items-center h-48">
          <p className="text-[#8B5A2B] text-lg animate-pulse">Loading expenses...</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-6xl mx-auto mt-8 w-full">

            {/* Expense Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-semibold text-[#8B5E3C] mb-4">
                {isEditing ? "Edit Expense" : "Add an Expense"}
              </h2>
              <div className="mb-4">
                <label className="block text-[#8B5E3C] mb-2 font-medium">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88B65]"
                  placeholder="Expense Title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-[#8B5E3C] mb-2 font-medium">Amount (Rs.)</label>
                <input
                  type="number"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88B65]"
                  placeholder="Expense Amount"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mb-3 bg-red-50 px-3 py-2 rounded-lg">{error}</p>
              )}

              <div className="flex gap-2">
                <button
                  onClick={addExpense}
                  disabled={saving || !formData.title || !formData.amount}
                  className="bg-[#A05E41] text-white px-4 py-2 rounded-lg flex-1 hover:bg-[#8B4F3A] disabled:opacity-60 transition"
                >
                  {saving ? "Saving..." : isEditing ? "Save Changes" : "Add Expense"}
                </button>
                {isEditing && (
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setEditingId(null);
                      setFormData({ title: "", amount: "" });
                    }}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Cancel
                  </button>
                )}
              </div>

              {/* Total */}
              {expenses.length > 0 && (
                <div className="mt-4 p-3 bg-[#F9F2E7] rounded-lg text-center">
                  <p className="text-[#8B5E3C] font-semibold text-lg">
                    Total: Rs. {totalAmount.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </p>
                </div>
              )}
            </div>

            {/* Expense List */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
              <h2 className="text-xl font-semibold text-[#8B5E3C] mb-4">Expense List</h2>
              <ul>
                {expenses.map((expense) => (
                  <li
                    key={expense._id}
                    className="flex justify-between items-center p-2 bg-[#F9F2E7] rounded-lg mb-2"
                  >
                    <span className="text-[#8B5E3C] font-medium">
                      {expense.title}: Rs. {expense.amount.toFixed(2)}
                    </span>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => editExpense(expense)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteExpense(expense._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              {expenses.length === 0 && (
                <p className="text-center text-[#8B5E3C] mt-4">No expenses added yet.</p>
              )}
            </div>
          </div>

          {/* Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-4xl mx-auto w-full">
            <h2 className="text-xl font-semibold text-[#8B5E3C] mb-4 text-center">Summary Chart</h2>
            {expenses.length > 0 ? (
              <div className="flex justify-center">
                <PieChart width={300} height={250}>
                  <Pie
                    data={expenses}
                    dataKey="amount"
                    nameKey="title"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                  >
                    {expenses.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `Rs. ${value.toFixed(2)}`} />
                </PieChart>
              </div>
            ) : (
              <p className="text-center text-[#8B5E3C]">No data to display in the chart.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default BudgetTracker;
