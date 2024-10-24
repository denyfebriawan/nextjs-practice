import { retrieveData } from "@/lib/firebase/service";
import { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@/types/Product";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await retrieveData("products");
  res.status(200).json({
    status: true,
    statusCode: 200,
    message: "Produk berhasil diambil",
    products,
  });
}
