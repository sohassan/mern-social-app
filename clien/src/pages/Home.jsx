
import { Stack } from "@mui/system";
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
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      <Add />
    </>
  );
};

export default Home;
