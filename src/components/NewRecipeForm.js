import React, { useState, useEffect } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "../styles/NewRecipeForm.css"


function NewRecipeForm({ addRecipe }) {
  const history = useHistory();
  const [validated, setValidated] = useState(false);
  const [recipeFormData, setRecipeFormData] = useState({
    name: "",
    description: "",
    ingredients: "",
    cookTime: "",
    steps: "",
    imageURL: "",
  });
  
  useEffect(() => {
    return () => {
      // This is the cleanup function
    }
  }, []);

  async function handleSubmit(e) {
    const form = e.currentTarget;
    if(form.checkValidity() === true) {
      e.preventDefault();
      const newRecipe = await addRecipe(createRecipeObj());
      history.push(`/recipes/${newRecipe.id}`);
      reset();
    }
    setValidated(true);
  }

  function createRecipeObj() {
    return {
      name: recipeFormData.name,
      description: recipeFormData.description,
      ingredients: generateIngredientList(recipeFormData.ingredients),
      cookTime: recipeFormData.cookTime,
      steps: stringListToArray(recipeFormData.steps),
      imageURL: recipeFormData.imageURL,
    }
  }

  function stringListToArray(str) {
    return str.split(/\r?\n/).filter(line => line.trim() !== "");
  }

  function generateIngredientList(list) {
     const result = list.split(/\r?\n/).filter(line => line.trim() !== "");
     const newArray = [];
     result.map(element => newArray.push({name: element}))
     return newArray;
  }

  function reset() {
    setRecipeFormData({
      name: "",
      description: "",
      ingredients: [],
      cookTime: "",
      steps: [],
      imageURL: "",
    });
  }

  return (
    <Form className="formContainer" noValidate validated={validated} onSubmit={handleSubmit}>

      {/* ##### Title ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="formLabel bold">Title</Form.Label>
        <Form.Control 
          required
          type="text" 
          placeholder="Write a title for your recipe. Something catchy..." 
          value={recipeFormData.name}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, name: e.target.value })}
        />
      </Form.Group>

      {/* ##### Description ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Description</Form.Label>
        <Form.Control 
          required
          as="textarea" 
          rows={3} 
          placeholder="Write a short description..."
          value={recipeFormData.description}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, description: e.target.value })}
        />
      </Form.Group>

      {/* ##### Ingredients ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Ingredients</Form.Label>
        <Form.Control 
          required
          as="textarea"
          rows={4} 
          placeholder="Add egg and meat until egg mixture is combined..."
          value={recipeFormData.ingredients}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, ingredients: e.target.value })}
        />
      </Form.Group>


      {/* ##### Cook Time ##### */}
      <Form.Label className="formLabel bold">Cook Time</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control
          required
          placeholder="45"
          type="number"
          value={recipeFormData.cookTime}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, cookTime: e.target.value })}
        />
        <InputGroup.Text id="basic-addon2">minutes</InputGroup.Text>
      </InputGroup>

      {/* ##### Steps ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Steps</Form.Label>
        <Form.Control 
          required
          as="textarea" 
          rows={4} 
          placeholder="Add egg and meat until egg mixture is combined..."
          value={recipeFormData.steps}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, steps: e.target.value })}
        />
      </Form.Group>

      {/* ##### Image upload ##### */}
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="formLabel bold">Image</Form.Label>
        <Form.Control 
          required
          type="text" 
          placeholder="URL for recipe image..."
          value={recipeFormData.imageURL}
          onChange={(e) => setRecipeFormData({ ...recipeFormData, imageURL: e.target.value })}
        />
      </Form.Group>

      <Button type="submit" className="btn">
        Submit
      </Button>
    </Form>
  );
}

export default NewRecipeForm;