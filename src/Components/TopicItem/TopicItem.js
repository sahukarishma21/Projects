import React from "react";
import "./TopicItem.css";
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';

const TopicItem = ({ category, title, numberoftweet }) => {
  return (
    <div className="widgetsTopicsItem">
      <div className="widgetsTopicCategory">
        <span>{category}</span>
        <MoreHorizRoundedIcon/>
      </div>
      <span className="widgetsTopicTitle">#{title}</span>
      <span className="widgetsTopicCount">{numberoftweet} Tweets</span>
    </div>
  );
};

export default TopicItem;