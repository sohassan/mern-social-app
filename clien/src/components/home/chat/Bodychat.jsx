import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import React from 'react'

export default function Bodychat() {
  return (
    <List
      sx={{
        height: { xs: "67vh", md: "80vh" },
        overflowY: "auto",
        bgcolor: "rgba(255, 255, 255)",
        borderRadius: 1,
      }}
    >
      <ListItem>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              align="right"
               backgroundColor="red"
              primary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline',
              p:1, bgcolor:'green', borderRadius:4 }}
                component="span"
                variant="body2"
                color="text.primary"
                
              >
                Ali Connors
              </Typography>
            </React.Fragment>
          }
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="right" secondary="09:30"></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              align="left"
              primary="Hey, Iam Good! What about you ?"
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="left" secondary="09:31"></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
      <ListItem>
        <Grid container>
          <Grid item xs={12}>
            <ListItemText
              align="right"
              primary="Cool. i am good, let's catch up!"
            ></ListItemText>
          </Grid>
          <Grid item xs={12}>
            <ListItemText align="right" secondary="10:30"></ListItemText>
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
}
