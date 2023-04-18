import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../database";
import Product from "../../../models/Product";
import { IProduct } from "@/interfaces/products";

type Data = { message: string } | IProduct | null;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case "GET":
      return getProductsBySlug(req, res);
    default:
      res.status(400).json({
        message: "Bad Request",
      });
  }
}

const getProductsBySlug = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  await db.connect();
  const { slug } = req.query;
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  return res.json(product);
};
