import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  // loading: false,
  // error: null,
  // data: []  // For fetching data from API
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      console.log(action.payload);
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;
