import NextLink from "next/link";
import { AuthLayout } from "@/components/layout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

const RegisterPage = () => {
  return (
    <AuthLayout title="login">
      <Box sx={{ width: 350, padding: "10px 20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              Iniciar Sesion
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              <TextField label="Nombre Completo" variant="filled" fullWidth />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              <TextField label="Correo" variant="filled" fullWidth />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h1" component="h1">
              <TextField
                label="Contraseña"
                variant="filled"
                fullWidth
                type="password"
              />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              fullWidth
            >
              Ingresar
            </Button>
          </Grid>
          <Grid item xs={12} display="flex" justifyContent="end">
            <NextLink href="/auth/login" passHref>
              <Link underline="always">¿Ya tienes cuenta?</Link>
            </NextLink>
          </Grid>
        </Grid>
      </Box>
    </AuthLayout>
  );
};

export default RegisterPage;
