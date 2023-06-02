import React from 'react';
import styles from './DummyHome.module.css';
import { NavLink } from 'react-router-dom';
import Signup from '../Signup/Signup';
import RightSide from './rightside/RightSide';
import LeftSidebar from './LeftSidebar/LeftSidebar'
import { style } from '@mui/system';
import Createtweet from '../Home/Createtweet';
import Twitterpost from '../Home/Twitterpost';



export default function DummyHome() {
  return (
    <section className={styles.footer}>

      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Don't miss what's happening</h2>
          <p>People on Twitter are the first to know.</p>
        </div>
        <div className={styles.btns}>
          <NavLink to="/signin">
            <button className={styles.btn}>Login</button>
          </NavLink>
          <NavLink to="/">
            <button className={styles.btn1}>Signup</button>
          </NavLink>
        </div>
      </div>
      <div className={styles.pagecontainer}>
        <div className={styles.leftside}>
          <LeftSidebar />
        </div>
        
        <div className={styles.part}>
          <Twitterpost />
        </div>
        <div className={styles.rightside}>
          <RightSide />
        </div>

      </div>
    </section>
  );
}