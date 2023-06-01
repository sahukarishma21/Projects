import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, createTweet, fetchMyTweets } from "../fetchTweet/fetchTweets";



const tweetSlice = createSlice({
    name: "tweets",
    initialState: {
      tweets: [],
      myTweets: [],
      loading: false,
      error: null,
      createdTweet: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(createTweet.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(createTweet.fulfilled, (state, action) => {
          state.loading = false;
          state.createdTweet = action.payload;
        })
        .addCase(createTweet.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchTweets.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchTweets.fulfilled, (state, action) => {
          state.loading = false;
          state.tweets = action.payload;
        })
        .addCase(fetchTweets.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(fetchMyTweets.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchMyTweets.fulfilled, (state, action) => {
          state.loading = false;
          state.myTweets = action.payload;
        })
        .addCase(fetchMyTweets.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });
  
  export default tweetSlice.reducer;