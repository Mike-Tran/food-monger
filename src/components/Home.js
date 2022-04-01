import React from 'react'
import "../styles/Home.css"
import { Link, useHistory } from "react-router-dom";

function Home({recipes}) {
    const history = useHistory();

    function handleClick(e) {
        switch (e.target.innerHTML) {
            case "Create":
                history.push("/create");
                break;
            case "Explore":
                history.push("/recipes");
                break;
            case "Hungry?":
                const randomIndex = Math.floor(Math.random() * recipes.length);
                const randomRecipe = recipes[randomIndex];
                console.log(randomRecipe);
                history.push(`/recipes/${randomRecipe.id}`);
                break;
            default:
        }
    }

  return (
    <div className="dashboard-wrapper">
        <div className="dashboard-left-wrapper" onClick={handleClick}>
            <h1 className="centered">Create</h1>
        </div>

        <div className="dashboard-right-component1" onClick={handleClick}>
            <h1 className="centered">Explore</h1>
        </div>

        <div className="dashboard-right-component2" onClick={handleClick}>
            <h1 className="centered">Hungry?</h1>
        </div>
    </div>
  )
}

export default Home