import React from "react";
import { Box } from "@mui/material";
import Createtweet from "./Createtweet";
import Twitterpost from "./Twitterpost.jsx";
import Follow from "../follow/follow";
import Sidebar from "../Sidebar/Sidebar";
import style from "./home.module.css";
import LogOut from "../logout/logout";
import SearchBar from "../Rightsidebar/Searchbar/Searchbar";
import TopicItem from "../TopicItem/TopicItem";
import Topics from '../TrendKeyword/TrendKeyword'
import Trending from "../trends/trends";
import Twitterdata from '../Rightsidebar/data/User.json';
import data from '../Rightsidebar/data/trending.json'

const Home = () => {
  return (
    <Box>
      <Box selected className={style.content}></Box>
      <div className={style.container}>
        <div className={style.leftside}>
          <Sidebar />
          <div className={style.logout}>
          <LogOut />
          </div>
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
          <SearchBar  data={Twitterdata}/>
          <Trending/>
          <Follow />
          <div>
            <p>Terms of Service
              Privacy Policy
              Cookie Policy
              Accessibility
              Ads info
              More
              © 2023 X Corp.</p>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Home;
