import { Container } from "@mui/material";
import React from "react";
import Add from "../components/home/Add";
import Feed from "../components/home/Feed";
import Navbar from "../components/home/Navbar";
import Rightbar from "../components/home/Rightbar";
import Sidebar from "../components/home/Sidebar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          minWidth: {xs: 1 ,lg :0.7 } ,
        }}
      >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Container>
      <Add />
    </>
  );
};

export default Home;
