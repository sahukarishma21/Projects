import React from "react";
import { Box } from "@mui/material";
import Createtweet from "./Createtweet";
import Twitterpost from "./Twitterpost.jsx";
import Sidebar from "../Sidebar/Sidebar";
import "./home.css";

const Home = () => {
  return (
    <Box className="main-home">
      <h3>Home</h3>
      <Box selected className="home-content">
        <Box className="for-you">For You</Box>
        <Box className="following">Following</Box>
      </Box>
      <Createtweet />
      <Twitterpost />
    </Box>
  );
};

export default Home;
