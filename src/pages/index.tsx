import { ShopLayout } from "../components/layout/ShopLayout";
import { Typography } from "@mui/material";
import { ProductList } from "@/components/products";
import { useProducts } from "@/hooks";

export default function HomePage() {
  const { products, isLoading } = useProducts("/products");

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
      {isLoading ? <h1>Cargando...</h1> : <ProductList products={products} />}
    </ShopLayout>
  );
}
