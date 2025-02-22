import React, { useContext } from "react";
import Navbar from "../Component/Navbar";
import { RecipeContext } from "../Context/RecipeContext";

const RemoveRecipe = () => {
  const { recipes, removeRecipe } = useContext(RecipeContext);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Remove Recipes</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <div 
                key={recipe.id} 
                className="card d-flex flex-column" 
                style={{ width: "18rem", minHeight: "100%" }}
              >
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="card-img-top img-fluid"
                  style={{
                    width: "100%", 
                    height: "200px",  
                    objectFit: "cover"
                  }} 
                />
                <div className="card-body d-flex flex-column" style={{ minHeight: "200px" }}>
                  <h5 className="card-title text-center">{recipe.title}</h5> {/* ✅ Recipe title added */}
                  <p className="card-text flex-grow-1">{recipe.description}</p>
                  <button 
                    className="btn btn-danger w-100 mt-auto" 
                    onClick={() => removeRecipe(recipe.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No recipes available to remove.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RemoveRecipe;
