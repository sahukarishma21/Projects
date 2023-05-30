import { configureStore } from "@reduxjs/toolkit";
import registrationFormSlicereducer from './slices/registrationFormSlice'

const store = configureStore({
    reducer: {
      registration: registrationFormSlicereducer,
    },
  });

  export default store;
  

