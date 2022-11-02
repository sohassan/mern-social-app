import { Avatar, Divider, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function Contact() {
  return (
    
      <List>
        <ListItem button key="RemySharp">
          <ListItemIcon>
            <Avatar
              alt="Remy Sharp"
              src="https://material-ui.com/static/images/avatar/1.jpg"
            />
          </ListItemIcon>
          <ListItemText primary="John Wick"></ListItemText>
        </ListItem>
      </List>
    
    
  );
}

