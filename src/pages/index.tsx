import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { ShopLayout } from "../components/layout/ShopLayout";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <ShopLayout
      title={"Teslo-Shop - Home"}
      pageDescription={"Encuentra los mejores productos de teslo"}
    >
      <Typography variant="h1" component={"h1"}>
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ marginBottom: 1 }}>
        Todos los productos
      </Typography>
    </ShopLayout>
  );
}
