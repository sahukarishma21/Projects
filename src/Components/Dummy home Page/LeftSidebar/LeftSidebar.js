

import React from "react";
import LeftSideOption from "./LeftsideOption/LeftSideOption";
import TwitterIcon from '@mui/icons-material/Twitter';
import SettingsIcon from '@mui/icons-material/Settings';
import TagIcon from '@mui/icons-material/Tag';
import "./LeftSidebar.css"



function LeftSidebar() {
    return(
      <div className="leftsidebar">
        <TwitterIcon className="leftsidebar__twitterIcon" />
  
  
    
        <LeftSideOption Icon={TagIcon} text= "Explore" />
        <LeftSideOption Icon={SettingsIcon} text= "Settings" />
        
        </div>
        
    );
}

        export default LeftSidebar;