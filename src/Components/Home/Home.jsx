import React from "react";
import { Box } from "@mui/material";
import Createtweet from "./Createtweet";
import Twitterpost from "./Twitterpost.jsx"
import "./home.css"
import Follow from "../follow/follow";

const Home = () => {
  return (
    <Box className="main-home">
      <h3>Home</h3>
      <Box selected className="home-content">
        
        <Box className="for-you">For You</Box>
        <Box className="following">Following</Box>
      </Box>
      <Createtweet />
      <Twitterpost/>
      <Follow/>
    </Box>
  );
};

export default Home;
