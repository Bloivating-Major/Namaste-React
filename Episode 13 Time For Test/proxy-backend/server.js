// server.js
import fetch from "node-fetch";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");
// const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

// Headers to spoof a real browser
const spoofedHeaders = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/122.0.0.0 Safari/537.36",
  "Accept": "*/*",
  "Accept-Language": "en-US,en;q=0.9",
  "Referer": "https://www.swiggy.com/",
  "Origin": "https://www.swiggy.com",
  "Connection": "keep-alive",
};

// Route: Get list of restaurants
app.get("/api/restaurants", async (req, res) => {
  try {
    const swiggyUrl = process.env.SWIGGY_URL || "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599&lng=77.4126";
    console.log("🔗 Fetching from:", swiggyUrl);

    const response = await fetch(swiggyUrl, {
      headers: spoofedHeaders,
    });

    const text = await response.text();
    console.log("RAW RESPONSE:", text.slice(0, 200));
    const data = JSON.parse(text);

    res.json(data);
  } catch (err) {
    console.error("❌ Error:", err.message);
    res.status(500).json({ error: "Failed to fetch restaurant list" });
  }
});

// Route: Get menu for a restaurant
app.get("/api/menu/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // allow dynamic location (optional but recommended)
    const lat = req.query.lat || 23.2599333;
    const lng = req.query.lng || 77.412615;

    const menuUrl = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${id}`;

    console.log("📦 Fetching Menu for ID:", id);
    console.log("🔗 URL:", menuUrl);

    const response = await fetch(menuUrl, {
      headers: spoofedHeaders,
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    // optional safety check
    if (!data?.data) {
      return res.status(404).json({ error: "Menu not found" });
    }

    res.json(data);

  } catch (err) {
    console.error("❌ Error Fetching Menu:", err.message);
    res.status(500).json({ error: "Failed to fetch restaurant menu" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
