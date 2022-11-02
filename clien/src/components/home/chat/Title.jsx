import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Title() {
  return (
    <Grid container sx={{ display: {xs:"none", md: "block" } }}>
      <Grid item xs={3}>
        <Typography variant="h5" align="center">
          Contact
        </Typography>
      </Grid>
    </Grid>
  );
}
