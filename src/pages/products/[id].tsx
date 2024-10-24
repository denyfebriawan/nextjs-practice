import axiosClient from "@/lib/axiosClient";
import { Product } from "@/types/Product";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const DetailProduct = () => {
  const { query } = useRouter();
  const [product, setProduct] = useState<Product | null>(null); // Inisialisasi sebagai null

  useEffect(() => {
    const fetchProduct = async () => {
      if (!query.id) return; // Pastikan query.id ada sebelum mengambil data
      try {
        const response = await axiosClient.get(`products/${query.id}`);
        setProduct(response.data.product);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    fetchProduct();
  }, [query.id]); // Tambahkan query.id sebagai ketergantungan

  if (!product) {
    return <div>Loading...</div>; // Tampilkan loading jika produk belum ada
  }

  return (
    <div>
      <h1>Detail produk : {product.name}</h1>{" "}
      {/* Ganti product.id dengan product.name */}
      <p>ID: {product.id}</p>
      <p>Category: {product.category}</p>
      {/* Render properti lainnya sesuai kebutuhan */}
    </div>
  );
};

export default DetailProduct;
