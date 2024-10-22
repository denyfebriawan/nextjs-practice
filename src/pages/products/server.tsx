import axiosClient from "@/lib/axiosClient";
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

const ServerSideProduct = ({ products }: { products: Product[] }) => {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ServerSideProduct;

export async function getServerSideProps() {
  const res = await axiosClient.get("/products");
  return {
    props: {
      products: res.data.products,
    },
  };
}
