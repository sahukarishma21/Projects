import React from "react";
import { CardMedia, Avatar, Box } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import TwitterIcon from "@mui/icons-material/Twitter";
import ForwardIcon from "@mui/icons-material/Forward";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import ReplyIcon from "@mui/icons-material/Reply";
import BarChartIcon from "@mui/icons-material/BarChart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

// const useStyles = makeStyles({
//     rotatedIcon: {
//       transform: "rotate(90deg)", // Change the angle as per your requirement
//     },
//   });
const Twitterpost = () => {
  return (
    <Box selected className="post-container">
      <Box selected className="post-header">
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <h5>name</h5>
        <VerifiedIcon />
        <TwitterIcon />
        <h5>Username</h5>
        <h6>datetime</h6>
      </Box>
      <Box selected className="post-card">
        <CardMedia
          component="img"
          height="194"
          image="https://picsum.photos/id/11/600/800"
          alt="Paella dish"
        />
        <Box selected className="post-content">
          <Box>
            <ForwardIcon />

            <h6>count</h6>
            <ForwardIcon />

            <ChatBubbleIcon />
            <h5>count</h5>
            <ReplyIcon />
            <h5>Share</h5>
          </Box>
          <Box>
            <BarChartIcon />
            <h5>Top Comments</h5> <ArrowDropDownIcon />
          </Box>
          <Box>
            <p>Tweets Lorem ipsum dolor sit amet.</p>
          </Box>
        </Box>
      </Box>
      <Box selected className="post-footer">
        <ChatBubbleIcon />
        <h5>count</h5>
        <RepeatIcon />
        <FavoriteBorderIcon />
        <h5>count</h5>
        <BarChartIcon />
        <h5>count</h5>
        <FileDownloadIcon />
      </Box>
    </Box>
  );
};

export default Twitterpost;
