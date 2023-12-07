import React, { useState } from "react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./RecipePage";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBackToRecipes = () => {
    setSelectedRecipe(null);
  };

  return (
    <div>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} onBack={handleBackToRecipes} />
      ) : (
        <RecipeListPage onSelectRecipe={handleSelectRecipe} />
      )}
    </div>
  );
};

export default App;
