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

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTweet = createAsyncThunk(
  "tweet/createTweet",
  async (tweetData) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/akData",
        tweetData
      );
      const data = response.data;
      console.log("data:", data);
      const createdTweet = data;
      console.log("createdTweet:", createdTweet);
      return createdTweet;
    } catch (error) {
      throw new Error("Failed to create Tweet");
    }
  }
);

export const fetchTweets = createAsyncThunk("tweet/fetchTweets", async () => {
  try {
    const response = await axios.get("http://localhost:3001/datas");
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
    const response = await axios.get("http://localhost:3001/akData");
    const data = response.data;
    console.log("data ::", data);
    const tweets = data;
    console.log("tweets ::", tweets);
    return tweets;
  } catch (error) {
    throw new Error("Failed to fetch Tweets");
  }
});
