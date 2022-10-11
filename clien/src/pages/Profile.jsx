import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Add from "../components/home/Add";
import Feed from "../components/home/Feed";
import Navbar from "../components/home/Navbar";
import Rightbar from "../components/home/Rightbar";
import Sidebar from "../components/home/Sidebar";

export default function Profile() {
  const [user, setUser] = useState({});
   const [userprops, setUserprops] = useState();
  const username = useParams().username;

   useEffect(() => {
     const fetchUser = async () => {
      const res = await axios.get(`/users/profile/${username}`);
       setUser(res.data);
     };
     fetchUser();    
   }, [username]);
   useEffect(() => {  if(user){setUserprops(user);}
   }, [user]); 
  return (
    <>
      <Navbar />
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        bgcolor={"background.default"}
        flex={10}
      >
        <Sidebar />
        <Stack
          spacing={1}
          width="100vh"
          display="flex"
          justify-content="center"
        >
          {/* <Container flex={3} p={{ xs: 0, md: 2 }}>
          <Box
          sx={{
            marginTop: 8,
            display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          > */}
          <Paper
            width={"100%"}
            height={300}
            sx={{
              position: "relative",
              backgroundColor: "grey.800",
              color: "#fff",
              mt: 1,
              mb: 4,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            src={
              "https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000"
            }
            // sx={{
            //   position: "relative",
            //   backgroundColor: "grey.800",
            //   color: "#fff",
            //   mb: 4,
            //   backgroundSize: "cover",
            //   backgroundRepeat: "no-repeat",
            //   backgroundPosition: "center",
            //   backgroundImage: `https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000`,
            // }}
          >
            {/* Increase the priority of the hero background image */}
            {
              <img
                // style={{ width: "200px", height: "auto" }}
                width={"100%"}
                height={300}
                src={
                  "https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000"
                }
                alt=""
              />
            }
            <Avatar
              position="fixed"
              alt="Remy Sharp"
              src="https://img.freepik.com/photos-gratuite/route-etroite-dans-champ-herbeux-vert-entoure-arbres-verts-soleil-eclatant-arriere-plan_181624-9968.jpg?w=2000"
              sx={{
                width: 80,
                height: 80,
                position: "absolute",
                border: " 3px solid white ",
                bottom: 0,
                mx: "50%",
              }}
            />
          </Paper>
          {/* </Box>
        </Container> */}
          <Feed />
        </Stack>
        {userprops && <Rightbar users={userprops} />}
      </Stack>
      <Add />
    </>
  );
}
