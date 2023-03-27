import { ShopLayout } from "@/components/layout";
import { Box, Typography } from "@mui/material";
import React from "react";

const Custom404 = () => {
  return (
    <ShopLayout
      title="Page not found"
      pageDescription="No hay nada que mostrar aquí"
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100vh - 200px)"
        sx={{ flexDirection: { xs: "colum", row: "row" } }}
      >
        <Typography variant="h1" component="h1" fontSize={80} fontWeight={150}>
          404 |
        </Typography>
        <Typography marginLeft={2}>
          No encontramos ninguna página con aquí.
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default Custom404;
