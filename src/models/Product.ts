import { IProduct } from "@/interfaces/products";
import mongoose, { Model, Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    description: {
      type: String,
      default:
        "Introducing the Tesla Chill Collection. The Men’s Chill Crew Neck Sweatshirt has a premium, heavyweight exterior and soft fleece interior for comfort in any season. The sweatshirt features a subtle thermoplastic polyurethane T logo on the chest and a Tesla wordmark below the back collar. Made from 60% cotton and 40% recycled polyester.",
    },
    images: {
      type: [String],
    },
    inStock: {
      type: Number,
      default: 0,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    sizes: {
      type: String,
      enum: {
        values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
        message: "{Value} no es un tamaño permitido",
      },
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{Value} no es un tipo permitido",
      },
      required: true,
    },
    tags: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{Value} no es un genero permitido",
      },
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

productSchema.index({ title: "text", tags: "text" });
const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
