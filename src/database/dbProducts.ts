import Product from "@/models/Product";
import { db } from ".";
import { IProduct } from "@/interfaces/products";

export const getProductBySlug = async (
  slug: string
): Promise<IProduct | null> => {
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();

  if (!product) {
    return null;
  }

  return JSON.parse(JSON.stringify(product));
};

interface ProductSlug {
  slug: string;
}

export const getAllProductsSlugs = async (): Promise<ProductSlug[]> => {
  await db.connect();
  const slugs = await Product.find().select("slug -_id").lean();
  await db.disconnect();
  return slugs;
};

export const getProductsByTerm = async (term: string): Promise<IProduct[]> => {
  term = term.toString().toLocaleLowerCase();
  await db.connect();
  const products = await Product.find({ $text: { $search: term } })
    .select("title images price inStock slud -_id")
    .lean();

  await db.disconnect();
  return products;
};

export const getAllProducts = async (): Promise<IProduct[]> => {
  await db.connect();
  const products = await Product.find().lean();
  await db.disconnect();
  return JSON.parse(JSON.stringify(products));
};
