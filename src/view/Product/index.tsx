/* eslint-disable @next/next/no-img-element */
import styles from "@/pages/products/Product.module.scss";

type Product = {
  id: number;
  image: string;
  name: string;
  description: string;
  category: string;
  price: number;
  rating: string;
};

const ProductView = ({ products }: { products: Product[] }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__title}>Products</h1>
      <div className={styles.product__content}>
        {products.length > 0 ? (
          <>
            {products.map((product: Product) => (
              <div className={styles.product__content__item} key={product.id}>
                <img
                  className={styles.product__content__item__image}
                  src={product.image}
                  alt="bag"
                />
                <div className={styles.product__content__item__name}>
                  {product.name}
                </div>
                <div className={styles.product__content__item__category}>
                  {product.category}
                </div>
                <div className={styles.product__content__item__price}>
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })}
                </div>
                <div className={styles.product__content__item__rating}>
                  <span>rating : </span>
                  {product.rating}
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className={styles.product__content__skeleton}>
              <div className={styles.product__content__skeleton__image}></div>
              <div className={styles.product__content__skeleton__name}></div>
              <div
                className={styles.product__content__skeleton__category}
              ></div>
              <div className={styles.product__content__skeleton__price}></div>
              <div className={styles.product__content__skeleton__rating}></div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductView;
