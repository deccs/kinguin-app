// pages/index.js

import { useEffect, useState } from "react";
import { getProducts } from "../lib/kinguinAPI";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts("7af120b845da4e4f6b5a342c774df064");
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
