import { configureStore } from "@reduxjs/toolkit";
import registrationFormSlicereducer from './slices/registrationFormSlice'

import tweetReducer from '../stores/slices/postTweetSlice'

const store = configureStore({
  reducer: {
    tweets: tweetReducer,
    registration: registrationFormSlicereducer,
  },
});

export default store;

  
  
  