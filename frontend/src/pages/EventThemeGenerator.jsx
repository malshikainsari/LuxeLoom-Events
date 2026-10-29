import React, { useState } from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import Header from "../components/Header";

const EventThemeGenerator = () => {
  const [themes, setThemes] = useState([]);
  const [budget, setBudget] = useState(10000);
  const [savedThemes, setSavedThemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    eventType: "",
    guests: "",
    eventDate: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const generateThemes = async () => {
    if (!formData.eventType || !formData.guests) {
      setError("Please enter event type and number of guests.");
      return;
    }
    if (formData.guests <= 0) {
      setError("Number of guests must be greater than 0.");
      return;
    }

    try {
      setLoading(true);
      setThemes([]);
      setError("");

      const response = await fetch("http://localhost:5000/api/themes/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventType: formData.eventType,
          guests: formData.guests,
          budget: budget,
          eventDate: formData.eventDate,
          location: formData.location,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Failed to generate themes");

      if (!data.themes || data.themes.length === 0) {
        setError("No themes were generated. Please try again.");
        return;
      }

      setThemes(data.themes);
    } catch (err) {
      setError("Failed to generate themes. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  const toggleSaveTheme = (theme) => {
    setSavedThemes((prev) =>
      prev.includes(theme.name)
        ? prev.filter((t) => t !== theme.name)
        : [...prev, theme.name]
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F5DC]">
      <Header activePage="themegenerator" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">

        <h2 className="text-2xl sm:text-3xl font-bold text-[#C85A32]">
          Event Theme Generator
        </h2>
        <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-700">
          Create your perfect event theme with AI assistance
        </p>

        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row gap-6 sm:gap-8">

          {/* Sidebar Form */}
          <div className="bg-white p-5 sm:p-6 rounded-xl shadow-md w-full lg:w-1/3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-5">Event Details</h3>

            <label className="block text-gray-700 text-sm font-medium">Event Type</label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
            >
              <option value="">Select event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Party">Party</option>
            </select>

            <label className="block text-gray-700 mt-4 text-sm font-medium">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
              placeholder="Enter number of guests"
              min="1"
            />

            <label className="block text-gray-700 mt-4 text-sm font-medium">Budget Range</label>
            <input
              type="range"
              className="w-full mt-1 accent-[#C85A32]"
              min="10000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
            <p className="text-right text-gray-600 text-sm font-medium">
              Rs. {Number(budget).toLocaleString()}
            </p>

            <label className="block text-gray-700 mt-4 text-sm font-medium">Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
            />

            <label className="block text-gray-700 mt-4 text-sm font-medium">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#C85A32]"
              placeholder="Enter location"
            />

            {/* Error */}
            {error && (
              <div className="mt-4 bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2 rounded-lg">
                {error}
              </div>
            )}

            <button
              onClick={generateThemes}
              disabled={loading}
              className="w-full mt-5 bg-[#C85A32] hover:bg-[#A94726] disabled:opacity-60 text-white p-3 rounded-lg transition font-semibold text-sm sm:text-base"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Generating...
                </span>
              ) : "Generate Themes"}
            </button>
          </div>

          {/* Results */}
          <div className="flex-1">

            {loading && (
              <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 text-center">
                <div className="flex flex-col items-center gap-4">
                  <svg className="animate-spin h-8 w-8 text-[#C85A32]" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  <p className="text-base sm:text-lg text-gray-600">
                    ✨ AI is creating personalized themes...
                  </p>
                </div>
              </div>
            )}

            {!loading && themes.length === 0 && !error && (
              <div className="bg-white rounded-xl shadow-md p-8 sm:p-10 text-center">
                <p className="text-gray-400 text-4xl mb-4">🎨</p>
                <p className="text-gray-500 text-sm sm:text-base">
                  Enter your event details and click <b>Generate Themes</b>.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {themes.map((theme, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-5 sm:p-6">

                  <div className="flex justify-between items-start">
                    <h3 className="text-lg sm:text-xl font-bold text-[#5D3A1A] pr-2">
                      {theme.name}
                    </h3>
                    <button onClick={() => toggleSaveTheme(theme)} className="flex-shrink-0 mt-1">
                      {savedThemes.includes(theme.name)
                        ? <FaBookmark className="text-xl text-[#C85A32]" />
                        : <FaRegBookmark className="text-xl text-gray-400 hover:text-[#C85A32] transition" />
                      }
                    </button>
                  </div>

                  <p className="text-gray-600 mt-3 text-sm sm:text-base">{theme.description}</p>

                  <div className="mt-4">
                    <h4 className="font-semibold text-sm sm:text-base">Color Palette</h4>
                    <div className="flex gap-2 mt-2 flex-wrap">
                      {theme.colorPalette?.map((color, i) => (
                        <span key={i} className="px-3 py-1 bg-[#F5F5DC] rounded-full text-xs sm:text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-sm sm:text-base">Decoration Ideas</h4>
                    <ul className="list-disc list-inside text-gray-600 mt-2 text-sm sm:text-base space-y-1">
                      {theme.decorationIdeas?.map((idea, i) => (
                        <li key={i}>{idea}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-semibold text-sm sm:text-base">Venue Style</h4>
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">{theme.venueStyle}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EventThemeGenerator;
