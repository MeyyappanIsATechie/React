import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.js";

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
