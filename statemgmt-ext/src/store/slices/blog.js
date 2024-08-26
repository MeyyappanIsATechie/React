import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      //   console.log(state);
      //   console.log(action);
      let cpyFormdata = { ...state.formData };
      cpyFormdata = {
        ...cpyFormdata,
        ...action.payload,
      };
      state.formData = cpyFormdata;
    },
    handleAddBlog: (state, action) => {
      state.blogList.push({
        id: nanoid(),
        ...state.formData,
      });
      state.formData = initialState.formData;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },
    setBlogListOnInitialLoad: (state, action) => {
      state.blogList = action.payload;
    },
  },
});

export const { handleInputChange, handleAddBlog, setBlogListOnInitialLoad } =
  blogSlice.actions;

export default blogSlice.reducer;
