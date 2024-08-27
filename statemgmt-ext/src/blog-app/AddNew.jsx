import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddBlog,
  handleEditBlog,
  handleInputChange,
  setCurrentEditedBlogId,
} from "../store/slices/blog";

const AddNew = () => {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { currentEditedBlogId } = blog;

  //   console.log(blog);

  const handleChange = (e) => {
    dispatch(
      handleInputChange({
        [e.target.name]: e.target.value,
      })
    );
  };
  const handleBlogSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted", blog.formData);
    if (currentEditedBlogId) {
      dispatch(handleEditBlog(currentEditedBlogId));
      // dispatch(handleInputChange({title: "", description: ""}));
      // dispatch(handleAddBlog(null)); // Clear the current edited blog id.  // Clear the form data.
    } else {
      dispatch(handleAddBlog());
    }
    // Reset the form data.
    if (currentEditedBlogId)
      dispatch(
        setCurrentEditedBlogId({
          currentEditedBlogId: null,
        })
      );
    dispatch(handleInputChange({ title: "", description: "" }));
  };
  return (
    <div>
      <form onSubmit={handleBlogSubmit}>
        <div className="flex flex-wrap gap-4">
          <label>Enter blog title</label>
          <input
            type="text"
            name="title"
            placeholder="enter blog title"
            id="title"
            onChange={handleChange}
            value={blog?.formData?.title}
          />
        </div>
        <div className="flex flex wrap gap-4">
          <label>Enter blog content</label>
          <input
            type="text"
            name="description"
            placeholder="enter blog description"
            id="description"
            onChange={handleChange}
            value={blog?.formData?.description}
          />
        </div>
        <button type="submit">
          {blog?.currentEditedBlogId ? "Edit Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddNew;
