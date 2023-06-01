import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets, createTweet, fetchMyTweets } from "../fetchTweet/fetchTweets";

const tweetsSlice = createSlice({
  name: "tweets",
  initialState: {
    tweets: [],
    loading: false,
    error: null,
    
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
        state.error = action.error.message;
      })
      .addCase(createTweet.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      // .addCase(createTweet.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.tweets.push(action.payload);
      // })
      // .addCase(createTweet.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // })
      // .addCase(fetchMyTweets.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(fetchMyTweets.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.tweets = action.payload;
      // })
      // .addCase(fetchMyTweets.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.error.message;
      // });
  },
});

export default tweetsSlice.reducer;
