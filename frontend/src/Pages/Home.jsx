import React, { useContext } from "react";
import Navbar from "../Component/Navbar";
import RecipeCard from "../Component/RecipeCard";
import { RecipeContext } from "../Context/RecipeContext";

const Home = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <h2 className="text-center mb-4">Featured Recipes</h2>
        <div className="d-flex justify-content-center gap-4 flex-wrap">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
