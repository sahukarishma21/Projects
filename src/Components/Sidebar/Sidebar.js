import React from "react";
import "./sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from "./Sidebaroption";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import Button from '@mui/material/Button';

import LogOut from "../logout/logout";

function Sidebar() {
  return(
   
    <div className="sidebar">
    {/* <LogOut/> */}
    
      <TwitterIcon className="sidebar__twitterIcon" />

<div className="scrollbar">
      <SidebarOption Icon={HomeRoundedIcon} text="Home" />
      <SidebarOption Icon={TagIcon} text= "Explore" />
      <SidebarOption Icon={NotificationsNoneSharpIcon} text= "Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text= "Messages" />
      <SidebarOption Icon={ListAltIcon} text= "Lists" />
      <SidebarOption Icon={BookmarkBorderIcon} text= "Bookmarks" />
      <SidebarOption Icon={PermIdentityRoundedIcon} text= "Profile" />
      <SidebarOption Icon={MoreHorizRoundedIcon} text= "More" />
      

      {/* Button -> Tweet */}
      <Button variant="contained" className="sidebar__tweet" fullWidth>
       Tweet
      </Button>
</div>
</div>

  );
}

export default Sidebar;