import NextLink from "next/link";
import {
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  Link,
  Chip,
} from "@mui/material";

import { OrderSumary } from "@/components/cart";
import CardList from "@/components/cart/CardList";
import { ShopLayout } from "@/components/layout";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";

const OrderPage = () => {
  return (
    <ShopLayout
      title="Resumen de Orden 123456"
      pageDescription={"Resumen de la orden"}
    >
      <Typography variant="h1" component="h1">
        Orden: ABC123
      </Typography>
      {/*<Chip
        sx={{ mt: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
  />*/}
      <Chip
        sx={{ mt: 2, mb: 2 }}
        label="Orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container>
        <Grid item xs={12} sm={7}>
          <CardList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="sumary-card">
            <CardContent>
              <Typography variant="h2">Resumen (3 productos)</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">
                  Direccion de Entrega
                </Typography>
                <NextLink href="checkout/address" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>

              <Typography variant="subtitle1">323 Algun Lugar</Typography>
              <Typography variant="subtitle1">46023 Valencia</Typography>
              <Typography variant="subtitle1">España</Typography>
              <Typography variant="subtitle1">+34 603048184</Typography>
              <Divider sx={{ my: 1 }} />
              <Box display="flex" justifyContent="end">
                <NextLink href="cart" passHref>
                  <Link underline="always">Editar</Link>
                </NextLink>
              </Box>
              <OrderSumary />
              <Box sx={{ mt: 3 }}>
                {/* TODO */}
                <h1>Pagar</h1>
                <Chip
                  sx={{ mt: 2 }}
                  label="Orden ya fue pagada"
                  variant="outlined"
                  color="success"
                  icon={<CreditScoreOutlined />}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default OrderPage;
