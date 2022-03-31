import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainNavigation from "./Navbar"
import RecipeList from './RecipeList';
import Header from "./Header";
import NewRecipeForm from './NewRecipeForm';
import RecipeDetail from './RecipeDetail';
import './App.css'

const recipesAPI = "http://localhost:8004/recipes";


function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/recipes")
     .then(res => res.json())
     .then(data => setRecipes(data))
  }, []);

  async function addRecipe(recipe) {
    const res = await fetch(recipesAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    const data = await res.json();
    setRecipes([...recipes, data]);
    console.log('Inside addREcipe');
    return data;
  }

  function handleCardClick(recipe) {
    // console.log("Recipe Name: ",recipe.name);
  }

  return (
    <div className="appContainer">
        <Router>
          <Header />
          <Switch>
            <Route path="/recipes/:id">
              <div className="appContentContainer">
                <RecipeDetail />
              </div>
            </Route>
            <Route path="/create">
              <div className="appContentContainer">
                <NewRecipeForm addRecipe={addRecipe}/>
              </div>
            </Route>
            <Route path="/recipes" >
              <div className="appContentContainer">
                < RecipeList recipes={recipes} handleCardClick={handleCardClick} />
              </div>
            </Route>
            <Route exact path="/">
            </Route>

          </Switch>
        </Router>
    </div>
  )
}

export default App