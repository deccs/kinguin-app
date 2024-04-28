// lib/kinguinAPI.js

export async function getProducts(apiKey) {
  const response = await fetch(
    "https://api.kinguin.net/v1/products?page=1&limit=20",
    {
      headers: {
        "Content-Type": "application/json",
        "X-Api-Key": apiKey,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products from Kinguin API");
  }

  return await response.json();
}
