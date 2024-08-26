import React from 'react'
import UseFetch from '../hooks/UseFetch';

const Comments = () => {

    const { data, error, isLoading } = UseFetch("https://dummyjson.com/comments");

  console.log(data);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <h2>Comments Page</h2>
      {data && data.comments ? (
        <ol>
          {" "}
          {data.comments.map((comment) => (
            <li key={comment.id}>
                <label>{comment.body}</label>
                <p>{comment.likes}</p>
            </li>
          ))}
        </ol>
      ) : (
        <p>No comments found</p>
      )}
    </div>
  )
}

export default Comments
