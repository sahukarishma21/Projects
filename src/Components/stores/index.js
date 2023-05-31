import { configureStore } from "@reduxjs/toolkit";
import registrationFormSlicereducer from './slices/registrationFormSlice'
import tweetsSlicesreducer from "./slices/tweetsSlices";

const store = configureStore({
    reducer: {
      registration: registrationFormSlicereducer,
      tweets : tweetsSlicesreducer
    },
  });

  export default store;
  

