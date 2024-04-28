// pages/index.js

import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/kinguin");
        if (!response.ok) {
          throw new Error("Failed to fetch products from Kinguin API");
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
