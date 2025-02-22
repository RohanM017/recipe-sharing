import React, { useState, useContext } from "react";
import Navbar from "../Component/Navbar";
import { RecipeContext } from "../Context/RecipeContext";

const AddRecipe = () => {
  const [recipe, setRecipe] = useState({ name: "", image: "", process: "" });
  const [message, setMessage] = useState("");
  const { addRecipe } = useContext(RecipeContext); // Get addRecipe from context

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  /*const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe.name && recipe.image && recipe.process) {
      addRecipe(recipe); // Add recipe to global state
      setMessage("Recipe added successfully!");
      setRecipe({ name: "", image: "", process: "" });
      setTimeout(() => setMessage(""), 2000);
    }
  };*/
  const handleSubmit = (e) => {
      e.preventDefault();
      if (recipe.name && recipe.image && recipe.process) {
        addRecipe({
          id: Date.now(),
          name: recipe.name,  // ✅ Changed title → name
          image: recipe.image,
          description: recipe.process,  // ✅ Changed process → description
        });
        setRecipe({ name: "", image: "", process: "" });
      }
    };

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2>Add Recipe</h2>
        {message && <div className="alert alert-success">{message}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Recipe Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={recipe.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image URL</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={recipe.image}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Process</label>
            <textarea
              className="form-control"
              name="process"
              value={recipe.process}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
