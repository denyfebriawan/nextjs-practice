import { NextApiRequest, NextApiResponse } from "next";
import { retrieveDataById } from "@/lib/firebase/service";
import { Product } from "@/types/Product";

type Data = {
  status: boolean;
  statusCode: number;
  message: string;
  product?: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query; // Ambil id dari query parameter

  if (typeof id !== "string") {
    // Pastikan id adalah string
    return res.status(400).json({
      status: false,
      statusCode: 400,
      message: "ID produk harus berupa string",
    });
  }
  const product = await retrieveDataById("products", id);
  try {
    if (!product) {
      // Jika tidak ada produk ditemukan
      return res.status(404).json({
        status: false,
        statusCode: 404,
        message: "Produk tidak ditemukan",
      });
    }

    // Kirim respon sukses jika produk ditemukan
    res.status(200).json({
      status: true,
      statusCode: 200,
      message: "Produk berhasil diambil",
      product, // Hanya mengirimkan satu produk
    });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({
      status: false,
      statusCode: 500,
      message: "Produk gagal di ambil",
    });
  }
}
