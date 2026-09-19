const express = require("express");
const OpenAI = require("openai");

const router = express.Router();

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

router.post("/generate", async (req, res) => {
  try {
    const {
      eventType,
      guests,
      budget,
      eventDate,
      location,
    } = req.body;

    if (!eventType || !guests || !budget) {
      return res.status(400).json({
        message: "Event type, guests and budget are required.",
      });
    }

    const prompt = `
You are an expert event planner for LuxeLoom.

Create exactly 4 creative and realistic event themes based on:

Event Type: ${eventType}
Number of Guests: ${guests}
Budget: Rs. ${budget}
Event Date: ${eventDate || "Not specified"}
Location: ${location || "Not specified"}

For each theme provide:
- name
- description
- colorPalette
- decorationIdeas
- venueStyle

IMPORTANT:
Return ONLY valid JSON.
Do not include markdown.
Do not include code fences.
Do not include explanations outside the JSON.

Use this exact structure:

{
  "themes": [
    {
      "name": "Theme Name",
      "description": "Short description",
      "colorPalette": ["Color 1", "Color 2", "Color 3"],
      "decorationIdeas": [
        "Decoration idea 1",
        "Decoration idea 2",
        "Decoration idea 3"
      ],
      "venueStyle": "Venue style description"
    }
  ]
}
`;

    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",
      input: prompt,
    });

    const result = JSON.parse(response.output_text);

    res.json(result);

  } catch (error) {
    console.error("❌ Theme generation error:", error);

    res.status(500).json({
      message: "Failed to generate event themes.",
      error: error.message,
    });
  }
});

module.exports = router;