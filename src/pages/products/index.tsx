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
    // <div className={styles.product}>
    //   <h1 className={styles.product__title}>Products</h1>
    //   <div className={styles.product__content}>
    //     {products.length > 0 ? (
    //       <>
    //         {products.map((product: Product) => (
    //           <div className={styles.product__content__item} key={product.id}>
    //             <img
    //               className={styles.product__content__item__image}
    //               src={product.image}
    //               alt="bag"
    //             />
    //             <div className={styles.product__content__item__name}>
    //               {product.name}
    //             </div>
    //             <div className={styles.product__content__item__category}>
    //               {product.category}
    //             </div>
    //             <div className={styles.product__content__item__price}>
    //               {product.price.toLocaleString("id-ID", {
    //                 style: "currency",
    //                 currency: "IDR",
    //               })}
    //             </div>
    //             <div className={styles.product__content__item__rating}>
    //               <span>rating : </span>
    //               {product.rating}
    //             </div>
    //           </div>
    //         ))}
    //       </>
    //     ) : (
    //       <>
    //         <div className={styles.product__content__skeleton}>
    //           <div className={styles.product__content__skeleton__image}></div>
    //           <div className={styles.product__content__skeleton__name}></div>
    //           <div
    //             className={styles.product__content__skeleton__category}
    //           ></div>
    //           <div className={styles.product__content__skeleton__price}></div>
    //           <div className={styles.product__content__skeleton__rating}></div>
    //         </div>
    //       </>
    //     )}
    //   </div>
    // </div>
  );
};

export default Products;
