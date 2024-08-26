import React from "react";
import { useParams } from "react-router-dom";
import NotFound from "./NotFound";

const RecipeDetails = () => {
  const param = useParams();
  const { id } = param;
  const recipeId = Number(id); // Convert id to a number

  // Check if id is within the valid range
  if (!Number.isInteger(recipeId) || recipeId < 1 || recipeId > 100) {
    return <NotFound />;
  }
  return (
    <div>
      <h2>Recipe Details of item {id}</h2>
    </div>
  );
};

export default RecipeDetails;
