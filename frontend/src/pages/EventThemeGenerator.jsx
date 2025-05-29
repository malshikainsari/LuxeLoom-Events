import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FaRegBookmark } from "react-icons/fa";
import Header from "../components/Header";

const EventThemeGenerator = () => {
  const [themes, setThemes] = useState([]);
  const [budget, setBudget] = useState(10000);
  const [savedThemes, setSavedThemes] = useState([]);

  const generateThemes = async () => {
    // Simulate AI API Call
    const aiGeneratedThemes = [
      "https://source.unsplash.com/300x200/?wedding,decor",
      "https://source.unsplash.com/300x200/?beach,event",
      "https://source.unsplash.com/300x200/?garden,party",
      "https://source.unsplash.com/300x200/?luxury,celebration"
    ];
    setThemes(aiGeneratedThemes);
  };

  const toggleSaveTheme = (theme) => {
    setSavedThemes((prev) =>
      prev.includes(theme) ? prev.filter((t) => t !== theme) : [...prev, theme]
    );
  };

  return (
    <div className="w-full h-[850px] bg-[#F5F5DC] p-10 flex flex-col">
      {/* Navigation - Replaced with Header component */}
      <Header activePage="themegenerator" />

      <div className="mt-12 flex flex-col">
        <h2 className="text-3xl font-bold text-[#FF4500] mt-6">Event Theme Generator</h2>
        <p className="mt-6 flex flex-col text-lg">Create your perfect event theme with AI assistance</p>
        <div className="flex mt-6 gap-8">
          {/* Sidebar */}
          <div className="bg-white p-6 rounded-lg shadow-md w-1/3 border">
            <h3 className="text-xl font-bold mb-4">Event Details</h3>
            <label className="block text-gray-700">Event Type</label>
            <select className="w-full border p-2 rounded mt-1">
              <option>Select event type</option>
            </select>
            <label className="block text-gray-700 mt-4">Number of Guests</label>
            <input type="number" className="w-full border p-2 rounded mt-1" placeholder="Enter number of guests" />
            <label className="block text-gray-700 mt-4">Budget Range</label>
            <input type="range" className="w-full" min="10000" max="200000" step="5000" value={budget} onChange={(e) => setBudget(e.target.value)} />
            <p className="text-right text-gray-600">Rs. {budget}</p>
            <label className="block text-gray-700 mt-4">Event Date</label>
            <input type="date" className="w-full border p-2 rounded mt-1" />
            <label className="block text-gray-700 mt-4">Location (Optional)</label>
            <input type="text" className="w-full border p-2 rounded mt-1" placeholder="Enter Location" />
            <button onClick={generateThemes} className="w-full mt-6 bg-[#C85A32] text-white p-2 rounded">Generate Themes</button>
          </div>
          {/* Event Themes Grid */}
          <div className="grid grid-cols-2 gap-4 flex-grow">
            {themes.length > 0 ? (
              themes.map((theme, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <img
                    src={theme}
                    alt="AI-generated event theme"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex justify-between items-center">
                    <p className="text-gray-600">AI-generated event theme</p>
                    <FaRegBookmark
                      className={`text-xl cursor-pointer ${savedThemes.includes(theme) ? 'text-[#C85A32]' : 'text-gray-400'}`}
                      onClick={() => toggleSaveTheme(theme)}
                    />
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">Click "Generate Themes" to see AI suggestions.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventThemeGenerator;
