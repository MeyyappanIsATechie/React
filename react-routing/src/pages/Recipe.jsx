import React from "react";
import { useLocation } from "react-router-dom";
import UseFetch from "../hooks/UseFetch";
import UseWindowResize from "../hooks/UseWindowResize";

const Recipe = () => {
  const location = useLocation();
  console.log(location);

  const windowSize = UseWindowResize();

  const { data, error, isLoading } = UseFetch("https://dummyjson.com/recipes");

  console.log(data);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h2 style={{color: windowSize.width<768 ? 'red': 'blue'}}>Recipe</h2>
      <h3> current height is {windowSize.height} and current width is {windowSize.width} </h3>
      {data && data.recipes ? (
        <ul>
          {" "}
          {data.recipes.map((recipe) => (
            <li key={recipe.id}>
              <img src={recipe.image} alt={`recipe ${recipe.id}`} />
              <label>{recipe.name}</label>
            </li>
          ))}
        </ul>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default Recipe;
