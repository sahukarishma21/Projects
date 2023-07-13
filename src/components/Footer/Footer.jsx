import React from 'react';
import styles from './Footer.module.css';
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function Footer() {
  return (
    <div className={styles.footer_main}>
<div className={styles.footer_name}><h4>Karishma Sahu</h4></div>
      <div className={styles.footer_mid }>© 2023 </div>
      <div className={styles.footer_icon}> <a href="https://www.linkedin.com/in/karishma-sahu-28b459227/" target="_LinkdIn">
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