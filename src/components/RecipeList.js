import React from "react";
import RecipeCard from "./RecipeCard";
import { Row } from "react-bootstrap";
import {Link} from "react-router-dom";

function RecipeList({recipes, handleCardClick}) {
  return (
      <div className="recipeListContainer">
        {/* <Row xs={1} sm={2} md={3} lg={4} className="g-4"> */}
        {recipes.map((recipe) => {
            return (
                <RecipeCard 
                    key={recipe.id} 
                    recipe={recipe} 
                    handleCardClick={handleCardClick} 
                />
            )
        })}
        {/* </Row> */}
    </div>
  );
}

export default RecipeList;