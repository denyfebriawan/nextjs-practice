/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "@/lib/axiosClient";
import { useEffect, useState } from "react";

import ProductView from "@/view/Product";

type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: string;
};

type ProductType = {
  status: boolean;
  statusCode: number;
  products: Product[]; // Ganti `data` menjadi `products`
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      // setLoading(true);
      try {
        const response = await axiosClient.get<ProductType>("/products");
        setProducts(response.data.products);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductView products={products} />
  );
};

export default Products;
