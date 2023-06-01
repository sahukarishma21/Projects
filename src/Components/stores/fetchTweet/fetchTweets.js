// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchTweets = createAsyncThunk("tweet/fetchTweets", async () => {
//   try {
//     console.log("hello");
//     const response = await fetch("../db.json");
//     if (!response.ok) {
//       throw new Error("failed to fetch Tweets");
//     }
//     const data = await response.json();
//     const tweets = data;
//     console.log("tweets::", tweets);
//     return tweets;
//   } catch (error) {
//     throw new Error("Failed to fetch Tweets");
//   }
// });
//----------------------------------------------------------------------
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createTweet = createAsyncThunk(
  "tweet/createTweet",
  async (tweetData) => {
    try {
      const response = await axios.post(
        "../db1.json",
        tweetData
      );
      const data = response.data;
      console.log("data:", data);
      const createdTweet = data;
      console.log("createdTweet:", createdTweet);
      console.log("data", tweetData)
      return createdTweet;
    } catch (error) {
      throw new Error("Failed to create Tweet");
=======
export const fetchTweets = createAsyncThunk('tweets/fetchTweets',async()=>{
    try{
        const response = await fetch("../db.json");
        if(!response.ok){
            throw new Error ('failed to fetch Tweets');
        }
        const data = await response.json();
        const tweets = data;
        console.log(tweets)
        return tweets ;
    }catch(error){
        throw new Error('Failed to fetch Tweets')

    }
    
  }
  
);

export const fetchTweets = createAsyncThunk("tweet/fetchTweets", async () => {
  try {
    const response = await axios.get("../db.json");
    const data = response.data;
    console.log("data ::", data);
    const tweets = data;
    console.log("tweets ::", tweets);
    return tweets;
  } catch (error) {
    throw new Error("Failed to fetch Tweets"); 
  }
});
export const fetchMyTweets = createAsyncThunk("tweet/fetchMyTweets", async () => {
  try {
    const response = await axios.get("../db1.json");
    const data = response.data;
    console.log("data ::", data);
    const tweets = data;
    console.log("tweets ::", tweets);
    return tweets;
  } catch (error) {
    throw new Error("Failed to fetch Tweets");
  }
});

//---------------------
// import { createAsyncThunk } from "@reduxjs/toolkit";

// export const createTweet = createAsyncThunk(
//   "tweet/createTweet",
//   async (tweetData) => {
//     try {
//       const response = await fetch("../db1.json", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(tweetData),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to create Tweet");
//       }
//       const data = await response.json();
//       const createdTweet = data;
//       return createdTweet;
//     } catch (error) {
//       throw new Error("Failed to create Tweet");
//     }
//   }
// );

// export const fetchTweets = createAsyncThunk("tweet/fetchTweets", async () => {
//   try {
//     const response = await fetch("../db.json");
//     if (!response.ok) {
//       throw new Error("Failed to fetch Tweets");
//     }
//     const data = await response.json();
//     const tweets = data;
//     return tweets;
//   } catch (error) {
//     throw new Error("Failed to fetch Tweets");
//   }
// });

// export const fetchMyTweets = createAsyncThunk("tweet/fetchMyTweets", async () => {
//   try {
//     const response = await fetch("../db1.json");
//     if (!response.ok) {
//       throw new Error("Failed to fetch Tweets");
//     }
//     const data = await response.json();
//     const tweets = data;
//     return tweets;
//   } catch (error) {
//     throw new Error("Failed to fetch Tweets");
//   }
// });
