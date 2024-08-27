import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentEditedBlogId: null,
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
      state.blogList = action.payload.blogList;
    },
    handleDeleteBlog: (state, action) => {
      // state.blogList = state.blogList.filter((blog) => blog.id!== action.payload.id);
      // localStorage.setItem("blogList", JSON.stringify(state.blogList));
      let cpyBlogList = [...state.blogList];
      cpyBlogList = cpyBlogList.filter(
        (blog) => blog.id !== action.payload.blogId
      );
      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
    },
    setCurrentEditedBlogId: (state, action) => {
      state.currentEditedBlogId = action.payload.currentEditedBlogId;
    },
    handleEditBlog: (state, action) => {
      let cpyBlogList = [...state.blogList];
      cpyBlogList = cpyBlogList.map((blog) =>
        blog.id === state.currentEditedBlogId
          ? { ...blog, ...state.formData }
          : blog
      );
      state.blogList = cpyBlogList;
      localStorage.setItem("blogList", JSON.stringify(state.blogList));
      //state.currentEditedBlogId = null; // Reset currentEditedBlogId after editing a blog
    },
  },
});

export const {
  handleInputChange,
  handleAddBlog,
  setBlogListOnInitialLoad,
  handleDeleteBlog,
  setCurrentEditedBlogId,
  handleEditBlog,
} = blogSlice.actions;

export default blogSlice.reducer;
