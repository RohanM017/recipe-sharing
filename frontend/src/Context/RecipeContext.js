import React, { createContext, useState } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      image: "/Images/PannerTikka.jpg", // ✅ Corrected Path
      name: "Panner Tikka",
      description: "To prepare Paneer Tikka, start by mixing yogurt, ginger-garlic paste, red chili powder, turmeric, garam masala, chaat masala, cumin powder, lemon juice, gram flour, oil, and salt in a bowl to form a smooth marinade. Add cubed paneer, onion, and capsicum, ensuring they are well-coated, and let them marinate for at least 30 minutes. Thread the marinated paneer and vegetables onto skewers, alternating between them.",
    },
    {
      id: 2,
      image: "/Images/VegBiryani.jpg", // ✅ Corrected Path
      name: "Veg Biryani",
      description: "To prepare Veg Biryani, start by soaking 1 cup of basmati rice for 30 minutes, then cook it until 80% done. In a pan, heat ghee or oil, add whole spices (bay leaf, cloves, cardamom, cinnamon), and sauté chopped onions until golden brown. Add ginger-garlic paste, chopped tomatoes, and cook until soft. Mix in spices like turmeric, red chili powder, garam masala, and salt. ",
    },
    {
      id: 3,
      image: "/Images/vada-pav.jpg",
      name: "Vada Pav",
      description: "To prepare Vada Pav, start by boiling and mashing 2 potatoes. In a pan, heat oil, add mustard seeds, curry leaves, green chilies, and ginger-garlic paste. Sauté, then mix in turmeric, salt, and mashed potatoes. Let it cool and shape into small balls. Prepare a batter by mixing gram flour (besan), salt, turmeric, and water into a thick consistency. "
    }
  ]);

  // ✅ Add Recipe Function
  const addRecipe = (newRecipe) => {
    setRecipes((prevRecipes) => [...prevRecipes, { ...newRecipe, id: Date.now() }]);
  };

  // ✅ Remove Recipe Function (Fixes State Issue)
  const removeRecipe = (id) => {
    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <RecipeContext.Provider value={{ recipes, addRecipe, removeRecipe }}>
      {children}
    </RecipeContext.Provider>
  );
};
