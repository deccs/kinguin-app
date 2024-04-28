// pages/index.js

export default function Home({ products, error }) {
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

export async function getServerSideProps() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL || ""; // Get the Vercel deployment URL from environment variables
    const apiUrl = `${baseUrl}/api/products`;
    const res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch products from API");
    }
    const data = await res.json();
    return { props: { products: data.products } };
  } catch (error) {
    return { props: { error: error.message } };
  }
}
