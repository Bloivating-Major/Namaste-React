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
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
  "Accept": "application/json, text/plain, */*",
  "Referer": "https://www.swiggy.com/",
  "Origin": "https://www.swiggy.com",
};

// Route: Get list of restaurants
app.get("/api/restaurants", async (req, res) => {
  try {
    const swiggyUrl = process.env.SWIGGY_URL;
    console.log("🔗 Fetching from:", swiggyUrl);

    const response = await fetch(swiggyUrl, {
      headers: spoofedHeaders,
    });

    const data = await response.json();
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
    const menuUrl = `${process.env.SWIGGY_RES_URL}${id}`;

    console.log("📦 Fetching Menu for ID:", id);
    console.log("🔗 URL:", menuUrl);

    const response = await fetch(menuUrl, {
      headers: spoofedHeaders,
    });

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error("❌ Error Fetching Menu:", err.message);
    res.status(500).json({ error: "Failed to fetch restaurant menu" });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
