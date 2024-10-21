/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "@/lib/axiosClient";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
};

type ProductType = {
  status: boolean;
  statusCode: number;
  products: Product[]; // Ganti `data` menjadi `products`
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get<ProductType>("/products");
        setProducts(response.data.products);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <span>Description: {product.description}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
