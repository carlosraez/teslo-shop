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
import React, { useContext } from "react";
import { Box } from "@mui/system";
import {
  SearchOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { UIContext } from "@/context";

export const Navbar = () => {
  const { asPath } = useRouter();
  const { toggleSideMenu } = useContext(UIContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display="flex" alignItems="center">
            <Typography variant="h6">Teslo | </Typography>
            <Typography sx={{ ml: 0.5 }}>Shop </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <NextLink href="/category/men" passHref legacyBehavior>
          <Link>
            <Button color={asPath === "/category/men" ? "primary" : "info"}>
              Hombres
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/category/women" passHref legacyBehavior>
          <Link>
            <Button color={asPath === "/category/women" ? "primary" : "info"}>
              Mujeres
            </Button>
          </Link>
        </NextLink>
        <NextLink href="/category/kid" passHref legacyBehavior>
          <Link>
            <Button color={asPath === "/category/kid" ? "primary" : "info"}>
              Niños
            </Button>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <IconButton>
            <SearchOutlined></SearchOutlined>
          </IconButton>
          <NextLink href="/cart" passHref legacyBehavior>
            <Link>
              <IconButton>
                <Badge badgeContent={2} color="secondary">
                  <ShoppingCartOutlined />
                </Badge>
              </IconButton>
            </Link>
          </NextLink>
        </Box>
        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
