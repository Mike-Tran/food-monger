import React from "react";
import RecipeCard from "./RecipeCard";
import { Row } from "react-bootstrap";
import {Link} from "react-router-dom";

function RecipeList({recipes, handleCardClick}) {
  return (
      <div className="recipeListContainer">
        {recipes.map((recipe) => {
            return (
                <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    handleCardClick={handleCardClick} 
                />
            )
        })}
    </div>
  );
}

export default RecipeList;