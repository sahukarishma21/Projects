import { configureStore,getDefaultMiddleware } from "@reduxjs/toolkit";
import registrationFormSlicereducer from "./slices/registrationFormSlice";
import tweetsSlicesreducer from "./slices/tweetsSlices";
import thunkMiddleware from "redux-thunk"

const store = configureStore({
  reducer: {
    registration: registrationFormSlicereducer,
    tweets: tweetsSlicesreducer,
  },
  middleware: [...getDefaultMiddleware(), thunkMiddleware],
});

export default store;
