import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Fab,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import { Container } from "@mui/system";
import Navbar from "../components/home/Navbar";
import Title from "../components/home/chat/Title";
import Sidecontact from "../components/home/chat/Sidecontact";
import Contact from "../components/home/chat/Contact";
import Bodychat from "../components/home/chat/Bodychat";
import Footerchat from "../components/home/chat/Footerchat";

const Chat = () => {
  return (
    <>
      <Navbar />
      <Box height="100vh" width="100vw" sx={{ bgcolor: "#abb8c3" }}>
        <Container>
          <Title />
          <Grid
            container
            sx={{
              width: "100%",
              height: "80vh",
            }}
          >
            <Sidecontact />
            <Grid sx={{ width: { xs: 1, md: 0.75 } }}>
              <Grid sx={{ display: { md: "none" } }}>
                <Contact />
              </Grid>
              <Bodychat />
              <Divider />
              <Footerchat />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Chat;
