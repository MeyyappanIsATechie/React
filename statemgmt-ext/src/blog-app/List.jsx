import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleInputChange,
  setBlogListOnInitialLoad,
  setCurrentEditedBlogId,
} from "../store/slices/blog";

const List = () => {
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  const dispatch = useDispatch();
  //   console.log(blogList);

  const onEditBlog = (blog) => () => {
    dispatch(
      setCurrentEditedBlogId({
        currentEditedBlogId: blog?.id,
      })
    );
    dispatch(
      handleInputChange({
        title: blog?.title,
        description: blog?.description,
      })
    );
  };

  const onDeleteBlog = (id) => () => {
    dispatch(
      handleDeleteBlog({
        blogId: id,
      })
    );
  };

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((blog) => (
          <div className="border-4 border-red-500 p-2" key={blog?.id}>
            <h3>{blog?.title}</h3>
            <p>{blog?.description}</p>
            <button onClick={onEditBlog(blog)}>Edit Blog</button>
            <button onClick={onDeleteBlog(blog?.id)}>Delete Blog</button>
          </div>
        ))
      ) : (
        <h3>No blog added</h3>
      )}
    </ul>
  );
};

export default List;
