import { Send } from '@mui/icons-material';
import { Fab, Grid, TextField } from '@mui/material';
import React from 'react'

export default function Footerchat() {
  return (
    <Grid
      container
      sx={{ p: 1, bgcolor: "rgba(255, 255, 255)", borderRadius: 1 }}
    >
      <Grid item xs={10}>
        <TextField id="outlined-basic-email" label="Type Something" fullWidth />
      </Grid>
      <Grid
        xs={1}
        align="right"
        sx={{ bgcolor: "rgba(255, 255, 255)", borderRadius: 1 }}
      >
        <Fab color="primary" aria-label="add">
          <Send />
        </Fab>
      </Grid>
    </Grid>
  );
}
