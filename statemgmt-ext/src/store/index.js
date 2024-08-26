import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counter.js";
import { blogSlice } from "./slices/blog.js";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    blog: blogSlice.reducer,
  },
});

export default store;
