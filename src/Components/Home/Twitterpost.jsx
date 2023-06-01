import React from "react";
import { CardMedia, Avatar, Box } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import TwitterIcon from "@mui/icons-material/Twitter";
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import "./twitterpost.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../stores/fetchTweet/fetchTweets";

const Twitterpost = () => {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets.tweets);
  const loading = useSelector((state) => state.tweets.loading);
  const error = useSelector((state) => state.tweets.error);

  useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Box selected className="post-container">
      <Box selected className="post-header-container">
        {loading ? (
          <h5>Loading...</h5>
        ) : error ? (
          <h5>Error: {error}</h5>
        ) : (
          <ul>
            {tweets.map((tweet) => (
              <>
                <Box className="post-header" key={tweet.id}>
                  <Avatar alt="profile" src={tweet.images} />
                  <span>{tweet.name}</span>
                  <VerifiedIcon />
                  <TwitterIcon />
                  <span>{tweet.email}</span>
                  <span>{tweet.created_at}</span>
                </Box>
                <div className="hero-card">
                  <Box selected className="post-card">
                    <CardMedia
                      className="postcard-img"
                      component="img"
                      height="194"
                      image="https://picsum.photos/id/11/600/800"
                      alt="Paella dish"
                    />
                    <Box selected className="post-contain">
                      <Box className="post-contents">
                        <Box className="forword-icon">
                          <NorthIcon />
                          <h6>{tweet.favorite_count}</h6>
                          <SouthIcon />
                        </Box>
                        <Box className="comment-icon">
                          <ChatBubbleIcon />
                          <h5>{tweet.comment_count}</h5>
                        </Box>
                        <Box className="share-icon">
                          <ReplyIcon />
                          <h5>Share</h5>
                        </Box>
                      </Box>
                    </Box>
                    <Box>
                      <Box className="chartbox">
                        <BarChartIcon />
                        <h5>Top Comments</h5> <ArrowDropDownIcon />
                      </Box>
                      <Box>
                        <p className="comment-tweet">
                          Tweets Lorem ipsum dolor sit amet.
                        </p>
                      </Box>
                    </Box>
                  </Box>
                  <div className="footer-card-content">
                    <Box selected className="post-footer">
                      <ChatBubbleIcon />
                      <span>{tweet.comment_count}</span>
                      <RepeatIcon />
                      <span>{tweet.retweet_count}</span>
                      <FavoriteBorderIcon />
                      <span>{tweet.favorite_count}</span>
                      <BarChartIcon />
                      <span>{tweet.Boxview_count}</span>
                      <FileDownloadIcon />
                    </Box>
                  </div>
                </div>
              </>
            ))}
          </ul>
        )}
      </Box>
    </Box>
  );
};

export default Twitterpost;

// <Box selected className="post-header">
//       {loading ? (
//         <h5>Loading...</h5>
//       ) : error ? (
//         <h5>Error: {error}</h5>
//       ) : (
//         <ul>
//           {tweets.map((tweet) => (
//             <Box key={tweet.id}>
//         <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         <h5>{tweets.name}</h5>
//         <VerifiedIcon />
//         <TwitterIcon />
//         <h5>{tweets.email}</h5>
//         <h6>{tweets.date}</h6>
//       </Box>
//       <Box selected className="post-card">
//         <CardMedia
//           component="img"
//           height="194"
//           image="https://picsum.photos/id/11/600/800"
//           alt="Paella dish"
//         />
//         <Box selected className="post-content">
//           <Box>
//             <ForwardIcon />

//             <h6>count</h6>
//             <ForwardIcon />

//             <ChatBubbleIcon />
//             <h5>count</h5>
//             <ReplyIcon />
//             <h5>Share</h5>
//           </Box>
//           <Box>
//             <BarChartIcon />
//             <h5>Top Comments</h5> <ArrowDropDownIcon />
//           </Box>
//           <Box>
//             <p>Tweets Lorem ipsum dolor sit amet.</p>
//           </Box>
//         </Box>
//       </Box>
//       <Box selected className="post-footer">
//         <ChatBubbleIcon />
//         <h5>count</h5>
//         <RepeatIcon />
//         <FavoriteBorderIcon />
//         <h5>count</h5>
//         <BarChartIcon />
//         <h5>count</h5>
//         <FileDownloadIcon />
//       </Box>
//     </Box>

//   );
// };

// export default Twitterpost;
