import React from 'react'
import { Button, Avatar, Box } from "@mui/material";
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MarginOutlinedIcon from '@mui/icons-material/MarginOutlined';


const Createtweet = () => {
  return (
       <Box selected className= "createtweet-container">

<Box selected className="profilepic&text">
<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

    <h5>what is happening?!</h5>
</Box>
<Box selected className="icon&btn" >
<Box selected className="icons">
<ImageOutlinedIcon/>
<MarginOutlinedIcon/>
<FormatListBulletedOutlinedIcon/>
<SentimentSatisfiedOutlinedIcon/>
<CalendarMonthOutlinedIcon/>
<RoomOutlinedIcon/>
</Box>
<Box selected className="btn">
<Button variant="outlined">Tweet</Button>
</Box>
</Box>
<Box selected className="showtweet" >
    <h5>Show 94 Tweets</h5>
</Box>
      </Box>
  
  )
}

export default Createtweet
