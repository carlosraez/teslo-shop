import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import NextLink from "next/link";

import { ShopLayout } from "@/components/layout";
import { Chip, Grid, Link, Typography } from "@mui/material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "fullname", headerName: "Nombre Completo", width: 300 },
  {
    field: "paid",
    headerName: "Pagada",
    description: "Muestra información si esta pagada la orden o no",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return params.row.paid ? (
        <Chip color="success" label="pagada" variant="outlined" />
      ) : (
        <Chip color="error" label="No pagada" variant="outlined" />
      );
    },
  },
  {
    field: "orden",
    headerName: "Ver orden",
    width: 200,
    renderCell: (params: GridValueGetterParams) => {
      return (
        <NextLink href={`/orders/${params.row.id}`} passHref>
          <Link>Ver Orden</Link>
        </NextLink>
      );
    },
  },
];

const rows: any[] = [
  { id: 1, paid: true, fullname: "Carlos Raez" },
  { id: 2, paid: true, fullname: "Lor Raez" },
  { id: 3, paid: true, fullname: "Rose Raez" },
  { id: 4, paid: true, fullname: "Carlos Raez" },
  { id: 5, paid: false, fullname: "Carlos Raez" },
  { id: 6, paid: true, fullname: "Carlos Raez" },
];

const HistoryPage = () => {
  return (
    <ShopLayout
      title="Historial de Ordenes"
      pageDescription="Historial de órdenes del cliente"
    >
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>
      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default HistoryPage;
