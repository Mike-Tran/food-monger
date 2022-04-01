import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import RecipeList from './RecipeList';
import Header from "./Header";
import Home from "./Home";
import NewRecipeForm from './NewRecipeForm';
import RecipeDetail from './RecipeDetail';
import NotFound from './NotFound';
import './App.css'
import './Navbar.css'

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
            <Route exact path="/create">
              <div className="appContentContainer">
                <NewRecipeForm addRecipe={addRecipe}/>
              </div>
            </Route>
            <Route exact path="/recipes" >
              <div className="appContentContainer">
                < RecipeList recipes={recipes} handleCardClick={handleCardClick} />
              </div>
            </Route>
            <Route exact path="/">
              <div className="appContentContainer">
                <Home recipes={recipes} />
              </div>
            </Route>
            <Route>
              <NotFound />
            </Route>

          </Switch>
        </Router>
    </div>
  )
}

export default App