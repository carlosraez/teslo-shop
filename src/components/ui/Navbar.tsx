import NextLink from "next/link";
import {
  AppBar,
  Badge,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import {
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo | </Typography>
            <Typography sx={{ ml: 0.5 }}>Shop </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <NextLink href="/category/men" passHref>
          <Link>
            <Button>Hombres</Button>
          </Link>
        </NextLink>
        <NextLink href="/category/women" passHref>
          <Link>
            <Button>Mujeres</Button>
          </Link>
        </NextLink>
        <NextLink href="/category/kid" passHref>
          <Link>
            <Button>Niños</Button>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <NextLink href="/cart" passHref>
            <Link>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
          </NextLink>
        </Box>
        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
