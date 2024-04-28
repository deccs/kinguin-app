// pages/api/products.js

export default async function handler(req, res) {
  const apiKey = "7af120b845da4e4f6b5a342c774df064"; // Replace with your actual API key
  const page = req.query.page || 1;
  const limit = req.query.limit || 20;

  const url = `https://api.kinguin.net/products/v1/?page=${page}&limit=${limit}`;

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
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
