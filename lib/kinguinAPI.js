// lib/kinguinAPI.js

const fetch = require("node-fetch");

const API_URL = "https://api.kinguin.net";

async function getProducts(apiKey, page = 1, limit = 20) {
  const url = `${API_URL}/products/v1/?page=${page}&limit=${limit}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products from Kinguin API");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = { getProducts };
