import React, { useEffect, useState } from 'react';
import style from './trends.module.css';
import data from '../Rightsidebar/data/trending.json'

function Trending() {
     const[trendingData,setTrendingData]=useState([]);
  
       const trending=trendingData.slice(0,10);
    useEffect(()=>{
      setTrendingData(data)
    },[])

  return (
    <div className={style.trendingcontainer}>
      <h2 style={{margin:"5%"}}>What’s happening</h2>
        {
          trending.map((item)=>
            
            <div className={style.data}>
              <p style={{fontSize:"20px", marginLeft:"15px",fontWeight:"bold"}}>{item.hashtag}</p>
              <p style={{marginLeft:"15px"}}><span>{item.count}  </span>Tweets</p>
            </div>
           )
        } 
        <h3 className={style.lastbtn}>Show more</h3>
      
    </div>
  )
}

export default Trending
