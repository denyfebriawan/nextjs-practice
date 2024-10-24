/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosClient from "@/lib/axiosClient";
import { useEffect, useState } from "react";
import { Product } from "@/types/Product";

import ProductView from "@/view/Product";

type ProductType = {
  status: boolean;
  statusCode: number;
  products: Product[];
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosClient.get<ProductType>("/products");
        setProducts(response.data.products);
      } catch (error: any) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return <ProductView products={products} />;
};

export default Products;
