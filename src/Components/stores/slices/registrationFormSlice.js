import { createSlice } from '@reduxjs/toolkit';

const registrationFormSlice = createSlice({
  name: 'registration',
  initialState: {
    name: '',
    phone: '',
    day: '',
    month: '',
    year: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

const { setName, setPhone, setDay, setMonth, setYear } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;
export { setName, setPhone, setDay, setMonth, setYear };