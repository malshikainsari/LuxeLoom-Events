import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

const BudgetTracker = () => {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({ title: "", amount: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const COLORS = ["#A88B65", "#F5CBA7", "#D98880", "#82E0AA", "#85C1E9"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addExpense = () => {
    if (formData.title && formData.amount) {
      if (isEditing) {
        setExpenses(
          expenses.map((expense) =>
            expense.id === editingId
              ? { ...expense, title: formData.title, amount: parseFloat(formData.amount) }
              : expense
          )
        );
        setIsEditing(false);
        setEditingId(null);
      } else {
        setExpenses([
          ...expenses,
          { id: Date.now(), title: formData.title, amount: parseFloat(formData.amount) },
        ]);
      }
      setFormData({ title: "", amount: "" });
    }
  };

  const editExpense = (id) => {
    const expenseToEdit = expenses.find((expense) => expense.id === id);
    setFormData({ title: expenseToEdit.title, amount: expenseToEdit.amount });
    setIsEditing(true);
    setEditingId(id);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="w-full h-[850px] bg-[#F5F5DC] p-10 flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center pb-6 relative">
        <h1 className="text-black text-2xl font-bold absolute top-[7%] left-[2%]">LOGO</h1>
        <div className="space-x-8 text-lg">
          <a href="#" className="text-gray-800 hover:text-[#C78141] font-bold absolute left-[20%]">
            EVENT THEME GENERATOR
          </a>
          <a href="http://localhost:5173/vendor" className="text-gray-800 hover:text-[#C78141] font-bold absolute left-[45%]">
            VENDOR MARKETPLACE
          </a>
          <a href="#" className="text-[#C78141] hover:text-black font-bold absolute left-[69%]">
            BUDGET TRACKER
          </a>
        </div>
        <CgProfile className="absolute right-[2%] top-[7%] text-3xl text-black hover:text-[#B43B26] cursor-pointer" />
      </nav>

      <h1 className="text-3xl font-bold text-[#FF4500] text-center mt-12">Budget Tracker</h1>

      <div className="flex flex-col lg:flex-row justify-between gap-6 max-w-6xl mx-auto mt-8">
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
            <label className="block text-[#8B5E3C] mb-2 font-medium">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A88B65]"
              placeholder="Expense Amount"
            />
          </div>
          <button
            onClick={addExpense}
            className="bg-[#A05E41] text-white px-4 py-2 rounded-lg w-full hover:bg-[#8B4F3A]"
          >
            {isEditing ? "Save Changes" : "Add Expense"}
          </button>
        </div>

        {/* Expense List */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
          <h2 className="text-xl font-semibold text-[#8B5E3C] mb-4">Expense List</h2>
          <ul>
            {expenses.map((expense) => (
              <li
                key={expense.id}
                className="flex justify-between items-center p-2 bg-[#F9F2E7] rounded-lg mb-2"
              >
                <span className="text-[#8B5E3C] font-medium">
                  {expense.title}: ${expense.amount.toFixed(2)}
                </span>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => editExpense(expense.id)}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => deleteExpense(expense.id)}
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
      <div className="bg-white p-6 rounded-lg shadow-lg mt-6 max-w-4xl mx-auto">
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
                fill="#8884d8"
              >
                {expenses.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </div>
        ) : (
          <p className="text-center text-[#8B5E3C]">No data to display in the chart.</p>
        )}
      </div>
    </div>
  );
};

export default BudgetTracker;
