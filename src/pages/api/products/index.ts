import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../database";
import Product from "../../../../models/Product";
import { IProduct } from "@/interfaces/products";

type Data = { message: string } | IProduct[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProducts(req, res);
    default:
      res.status(400).json({
        message: "Bad Request",
      });
  }
  res.status(200).json({ message: "Proceso realizado correctamente" });
}
const getProducts = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  await db.connect();
  const products = await Product.find()
    .select("title images price inStock slug -_id")
    .lean();
  await db.disconnect();
  return res.status(200).json(products);
};
