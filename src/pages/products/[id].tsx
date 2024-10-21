import { useRouter } from "next/router";

const DetailProduct = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>Detail produk : {query.id}</h1>
    </div>
  );
};

export default DetailProduct;
