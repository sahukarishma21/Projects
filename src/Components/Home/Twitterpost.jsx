import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTweet,
  fetchTweets,
  fetchMyTweets,
} from "../stores/fetchTweet/fetchTweets";
import "./createtweet.css";
import { Button, Avatar, Box } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import SentimentSatisfiedOutlinedIcon from "@mui/icons-material/SentimentSatisfiedOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import MarginOutlinedIcon from "@mui/icons-material/MarginOutlined";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";

const Createtweet = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const loading = useSelector((state) => state.tweets.loading);
  const error = useSelector((state) => state.tweets.error);
  const createdTweet = useSelector((state) => state.tweets.createdTweet);
  const [tweetContent, setTweetContent] = useState("");
  const [postImage, setPostImage] = useState(null);

  useEffect(() => {
    dispatch(fetchMyTweets());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  const handleTweetSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", tweetContent);
    formData.append("postImage", postImage);
    dispatch(createTweet(formData));
    setTweetContent("");
    setPostImage(null);
  };

  return (
    <Box>
      <Box className="tweet-container">
        <Box className="twit-content">
          <Box className="input-container">
            <Input
              type="text"
              value={tweetContent}
              onChange={(e) => setTweetContent(e.target.value)}
              placeholder="What's happening?"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment className="profilepic" position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
            <Input
              type="file"
              onChange={(e) => setPostImage(e.target.files[0])}
              placeholder="What's happening?"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment className="profilepic" position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </Box>
        </Box>
        <div className="tweet-footer">
          <div className="icon-container">
            <ImageOutlinedIcon />
            <MarginOutlinedIcon />
            <FormatListBulletedOutlinedIcon />
            <SentimentSatisfiedOutlinedIcon />
            <CalendarMonthOutlinedIcon />
            <RoomOutlinedIcon />
          </div>
          <div className="btn">
            <Button onClick={handleTweetSubmit}>Tweet</Button>
          </div>
        </div>
      </Box>
      <div className="showtweets">
        <span>Show 94 tweets</span>
      </div>

      {loading ? (
        <h5>Loading...</h5>
      ) : error ? (
        <h5>Error: {error}</h5>
      ) : (
        <ul>
          {tweets.map((tweet) => (
            <Box key={tweet.id}>
              <Box className="new-tweets">
                <Box className="child">
                  <Avatar
                    alt="http://dummyimage.com/50x50.png/5fa2dd/ffffff"
                    src="/static/images/avatar/1.jpg"
                  />
                </Box>
                <Box className="child">
                  <span>{tweet.content}</span>
                  {tweet.postImage && (
                    <img src={tweet.postImage} alt="Tweet Image" />
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Createtweet;
