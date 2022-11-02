import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Fixed() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item sx={{ width: 1 / 4 }}>
          <Grid position="fixed" sx={{ width: 1 / 4 }} pr={2}>
            <Item> xs=8</Item>
          </Grid>
        </Grid>

        <Grid item sx={{ width: 3 / 4 }}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item sx={{ width: 1 / 4 }}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item sx={{ width: 3 / 4 }}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}
