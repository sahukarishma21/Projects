import React from 'react';
import  './Footer.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Footer() {
  return (
    <div className="footer_main">

     
      <div className="footer_icon"> <a href="https://www.linkedin.com/in/karishma-sahu-28b459227/" target="_LinkdIn">
            <LinkedInIcon />
          </a>
          <a href="https://github.com/sahukarishma21" target="_GitHub">
            {" "}
            <GitHubIcon />
          </a>
           </div>
    </div>
  )
}