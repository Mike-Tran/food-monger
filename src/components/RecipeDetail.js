import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Image } from 'react-bootstrap'
import { PlusCircleFill } from 'react-bootstrap-icons';
import NotFound from "./NotFound"
import "../styles/RecipeDetail.css";

const recipeAPI = "http://localhost:8004/recipes/";

function RecipeDetail() {
    const [recipe, setRecipe] = useState({});
    const match = useParams();

    useEffect(() => {
    fetch(`${recipeAPI}${match.id}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
    }, []);

    function renderDetails() {
        if (Object.keys(recipe).length !== 0) {
            return (
                <div className="recipeDetailContainer">
                    <div className="detail-summary">
                        <div className="detailImage">
                            <Image src={recipe.imageURL}/>
                        </div>
                        <h1 className="recipeDetailName">{recipe.name}</h1>
                    </div>
                    <div className="recipe-info">
                        <h3 className="bold">Ingredients</h3>
                        <div className="ingredientsList">
                            {recipe.ingredients.map(ing => {
                                return (
                                    <div key={ing.name} className="listItem" >
                                        <PlusCircleFill/>
                                        {` ${!ing.quantity ? "" : ing.quantity} 
                                        ${!ing.name ? "" : ing.name}`}
                                    </div>
                                )}
                            )}
                        </div>

                        <h3 className="bold">Steps</h3>
                        <div className="ingredientsList">
                            {recipe.steps.map(step => {
                                return (
                                    <div key={step} className="listItem" >
                                        <PlusCircleFill/>
                                        {` ${!step ? "" : step}`}
                                    </div>
                                )}
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <NotFound />
        }
    }
    
    return (
        renderDetails()
    )
}

export default RecipeDetail


