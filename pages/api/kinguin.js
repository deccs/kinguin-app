// api/kinguin.js

export default async function handler(req, res) {
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual API key
  const url = `https://api.kinguin.net/v1${req.url}`;

  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data from Kinguin API");
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
