import NextLink from "next/link";

import { ShopLayout } from "@/components/layout";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";

const EmptyPage = () => {
  return (
    <ShopLayout
      title="Carrito Vacio"
      pageDescription="No hay articulos en el carrito"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "colum", row: "row" } }}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box display="flex" flexDirection="column" alignItems="center">
          <Typography marginLeft={2}>Su carrito está vacio</Typography>
          <NextLink href="/" passHref>
            <Link typography={"h4"} color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  );
};
export default EmptyPage;
