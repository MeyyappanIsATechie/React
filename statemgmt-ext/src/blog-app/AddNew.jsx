import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddBlog, handleInputChange } from "../store/slices/blog";

const AddNew = () => {
  const { blog } = useSelector((state) => state);
  const dispatch = useDispatch();

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
    dispatch(handleAddBlog());
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
        <button type="submit">Add new Blog</button>
      </form>
    </div>
  );
};

export default AddNew;
