import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../stores/fetchTweet/fetchTweets";
import { Button, Avatar } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MarginOutlinedIcon from "@mui/icons-material/MarginOutlined";
import "./createtweet.css";

const Createtweet = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const loading = useSelector((state) => state.tweets.loading);
  const error = useSelector((state) => state.tweets.error);

  const [tweetContent, setTweetContent] = useState("");
  const [tweetImage, setTweetImage] = useState(null);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleImage = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setTweetImage(reader.result);
  };

  const handleInput = (event) => {
    event.preventDefault();
    const newTweet = {
      text: tweetContent,
      image: tweetImage,
      time: new Date().toLocaleString(),
    };
    setTweetContent("");
    setTweetImage(null);
    dispatch(event.target.value);
  };

  return (
    <section>
      <div className="tweet-container">
        <div className="profile">
          <Avatar
            alt="Remy Sharp"
            src="https://tse2.mm.bing.net/th?id=OIP.cphbUmdFsam1huiAHaOnGwHaFB&pid=Api&P=0"
          />
          <div className="tweet-write">
            <input
              type="text"
              placeholder="What is Happening?"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
            />
          </div>
        </div>
        <div className="content">
          <div className="icon">
            <ImageOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <MarginOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <FormatListBulletedOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <SentimentSatisfiedOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <CalendarMonthOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
            <RoomOutlinedIcon
              sx={{
                height: "20px",
                width: "20px",
                color: "#1DA1F2",
                marginRight: "10px",
                padding: "5px",
                borderRadius: "15px",
                "&:hover": {
                  backgroundColor: "lightskyblue",
                },
              }}
            />
          </div>
          <div className="btn">
            <Button onClick={handleInput}>Tweet</Button>
          </div>
        </div>
        <div className="show">
          <span>Show 94 tweets</span>
        </div>
      </div>
    </section>
  );
};

export default Createtweet;
