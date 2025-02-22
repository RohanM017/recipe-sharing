import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import AddRecipe from "./Pages/AddRecipe";
import RemoveRecipe from "./Pages/RemoveRecipe";
import { RecipeProvider } from "./Context/RecipeContext";

const App = () => {
  return (
    <Router>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-recipe" element={<AddRecipe />} />
          <Route path="/remove-recipe" element={<RemoveRecipe />} />
        </Routes>
      </RecipeProvider>
    </Router>
  );
};

export default App;
