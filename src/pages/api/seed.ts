import { NextApiRequest, NextApiResponse } from "next";
import { connect, disconnect } from "../../database/db";
import Product from "../../models/Product";
import { db, seedDatabase } from "../../database";

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (process.env.NODE_ENV === "production") {
    return res.status(401).json({ message: "No tiene acceso a este API" });
  }

  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);
  await db.disconnect();

  res.status(200).json({ message: "Proceso realizado correctamente" });
}
