import React from "react";
import { Card, Col } from "react-bootstrap";
import {Link} from "react-router-dom";

function RecipeCard({recipe, handleCardClick}) {
    const {name, ingredients, steps, description, imageURL} = recipe;

    return (
        <Col>
        <Link to={`/recipes/${recipe.id}`} >
            <Card 
                border="light" 
                style={{ width: "18rem" }} 
                className="recipeCard" 
                onClick={() => handleCardClick(recipe)}
            >
                <Card.Img variant="top" src={imageURL} />
                <Card.Body>
                    <Card.Title className="recipeCardTitle">{name}</Card.Title>
                    <Card.Text className="italicize xs line-clamp3">
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
        </Col>
    );
}

export default RecipeCard;
