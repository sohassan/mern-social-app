import { Avatar, Divider, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react'
import Contact from './Contact';

export default function Sidecontact() {
  return (
    <Grid
      item
      xs={3}
      sx={{
        borderRight: "1px solid #e0e0e0",
        display: { xs: "none", md: "block" },
        bgcolor: "rgba(255, 255, 255)",
        borderRadius: 1,
      }}
    >
      <Contact />
      <Divider />

      <Divider />
      <List>
        <ListItem button key="RemySharp">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Remy Sharp">Remy Sharp</ListItemText>
          <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
        <ListItem button key="Alice">
          <ListItemIcon>
            <Avatar
              alt="Alice"
              src="https://material-ui.com/static/images/avatar/3.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Alice">Alice</ListItemText>
        </ListItem>
        <ListItem button key="CindyBaker">
          <ListItemIcon>
            <Avatar
              alt="Cindy Baker"
              src="https://material-ui.com/static/images/avatar/2.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="Cindy Baker">Cindy Baker</ListItemText>
        </ListItem>
      </List>
    </Grid>
  );
}
