import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const List = () => {
  const { blog } = useSelector((state) => state);
  const { blogList } = blog;
  //   console.log(blogList);

  useEffect(() => {}, []);

  return (
    <ul>
      {blogList?.length > 0 ? (
        blogList.map((blog) => (
          <div className="border-4 border-red-500 p-2" key={blog?.id}>
            <h3>{blog?.title}</h3>
            <p>{blog?.description}</p>
          </div>
        ))
      ) : (
        <h3>No blog added</h3>
      )}
    </ul>
  );
};

export default List;
