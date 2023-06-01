import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTweets = createAsyncThunk("tweet/fetchTweets", async () => {
  try {
    console.log("hello");
    const response = await fetch("../db.json");
    if (!response.ok) {
      throw new Error("failed to fetch Tweets");
    }
    const data = await response.json();
    const tweets = data;
    console.log("tweets::", tweets);
    return tweets;
  } catch (error) {
    throw new Error("Failed to fetch Tweets");
  }
});
