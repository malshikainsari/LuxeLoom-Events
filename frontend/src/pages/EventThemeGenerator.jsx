import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa";
import Header from "../components/Header";

const EventThemeGenerator = () => {
  const [themes, setThemes] = useState([]);
  const [budget, setBudget] = useState(10000);
  const [savedThemes, setSavedThemes] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    eventType: "",
    guests: "",
    eventDate: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const generateThemes = async () => {
    if (!formData.eventType || !formData.guests) {
      alert("Please enter event type and number of guests.");
      return;
    }

    try {
      setLoading(true);
      setThemes([]);

      const response = await fetch(
        "http://localhost:5000/api/themes/generate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            eventType: formData.eventType,
            guests: formData.guests,
            budget: budget,
            eventDate: formData.eventDate,
            location: formData.location,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to generate themes");
      }

      setThemes(data.themes || []);
    } catch (error) {
      console.error(error);
      alert("Failed to generate themes. Please try again.");
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

      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-3xl font-bold text-[#C85A32]">
          Event Theme Generator
        </h2>

        <p className="mt-3 text-lg text-gray-700">
          Create your perfect event theme with AI assistance
        </p>

        <div className="mt-8 flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <div className="bg-white p-6 rounded-xl shadow-md w-full lg:w-1/3">

            <h3 className="text-xl font-bold mb-5">
              Event Details
            </h3>

            <label className="block text-gray-700">
              Event Type
            </label>

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            >
              <option value="">Select event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Engagement">Engagement</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Party">Party</option>
            </select>

            <label className="block text-gray-700 mt-4">
              Number of Guests
            </label>

            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter number of guests"
            />

            <label className="block text-gray-700 mt-4">
              Budget Range
            </label>

            <input
              type="range"
              className="w-full"
              min="10000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />

            <p className="text-right text-gray-600">
              Rs. {budget}
            </p>

            <label className="block text-gray-700 mt-4">
              Event Date
            </label>

            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
            />

            <label className="block text-gray-700 mt-4">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border p-2 rounded mt-1"
              placeholder="Enter location"
            />

            <button
              onClick={generateThemes}
              disabled={loading}
              className="w-full mt-6 bg-[#C85A32] hover:bg-[#A94726] text-white p-3 rounded-lg transition"
            >
              {loading ? "Generating..." : "Generate Themes"}
            </button>

          </div>

          {/* AI Results */}
          <div className="flex-1">

            {loading && (
              <div className="bg-white rounded-xl shadow-md p-10 text-center">
                <p className="text-lg text-gray-600">
                  ✨ AI is creating personalized themes...
                </p>
              </div>
            )}

            {!loading && themes.length === 0 && (
              <div className="bg-white rounded-xl shadow-md p-10 text-center">
                <p className="text-gray-500">
                  Enter your event details and click{" "}
                  <b>Generate Themes</b>.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {themes.map((theme, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6"
                >

                  <div className="flex justify-between items-start">

                    <h3 className="text-xl font-bold text-[#5D3A1A]">
                      {theme.name}
                    </h3>

                    <FaRegBookmark
                      className={`text-xl cursor-pointer ${
                        savedThemes.includes(theme.name)
                          ? "text-[#C85A32]"
                          : "text-gray-400"
                      }`}
                      onClick={() => toggleSaveTheme(theme)}
                    />

                  </div>

                  <p className="text-gray-600 mt-3">
                    {theme.description}
                  </p>

                  <div className="mt-4">

                    <h4 className="font-semibold">
                      Color Palette
                    </h4>

                    <div className="flex gap-2 mt-2 flex-wrap">
                      {theme.colorPalette?.map((color, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#F5F5DC] rounded-full text-sm"
                        >
                          {color}
                        </span>
                      ))}
                    </div>

                  </div>

                  <div className="mt-4">

                    <h4 className="font-semibold">
                      Decoration Ideas
                    </h4>

                    <ul className="list-disc list-inside text-gray-600 mt-2">
                      {theme.decorationIdeas?.map((idea, i) => (
                        <li key={i}>{idea}</li>
                      ))}
                    </ul>

                  </div>

                  <div className="mt-4">

                    <h4 className="font-semibold">
                      Venue Style
                    </h4>

                    <p className="text-gray-600">
                      {theme.venueStyle}
                    </p>

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