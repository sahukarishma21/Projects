import { createSlice } from "@reduxjs/toolkit";
import { fetchTweets } from "../fetchTweet/fetchTweets";

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
      });
  },
});

export default tweetsSlice.reducer;
