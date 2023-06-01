import React from "react";
import { Box } from "@mui/material";
import Createtweet from "./Createtweet";
import Twitterpost from "./Twitterpost.jsx";
import Follow from "../follow/follow";
import Sidebar from "../Sidebar/Sidebar";
import style from "./home.module.css";
import LogOut from "../logout/logout";
import SearchBar from "../Rightsidebar/Searchbar/Searchbar";

const Home = () => {
  return (
    <Box>
      <Box selected className={style.content}></Box>
      <div className={style.container}>
        <div className={style.leftside}>
          <Sidebar />
          <LogOut />
        </div>
        <div className={style.midpart}>
          <h3>Home</h3>
          <div className={style.hometext}>
            <Box className={style.foryou}>For You</Box>
            <Box className={style.following}>Following</Box>
          </div>
          <Createtweet />
          <Twitterpost />
        </div>
        <div className={style.rightside}>
          <SearchBar />
          <Follow />
        </div>
      </div>
    </Box>
  );
};

export default Home;
