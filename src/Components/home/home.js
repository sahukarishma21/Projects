import React from "react";
import { Box } from "@mui/material";
import Createtweet from "./Createtweet";
import Twitterpost from "./Twitterpost.jsx"
import Follow from "../follow/follow";

const Home = () => {
  return (
    <Box>
    
      <Box selected className="Home-content">
        <h3>Home</h3>
        <Box>For You</Box>
        <Box>Following</Box>
      </Box>
      <Createtweet />
      <Twitterpost/>
      <Follow/>

    </Box>
  );
};

export default Home;
