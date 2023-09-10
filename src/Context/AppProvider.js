import React, { createContext, useContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeCollectionData, setRecipeCollectionData] = useState(null);

  return (
    <AppContext.Provider
      value={{
        recipeData,
        setRecipeData,
        recipeCollectionData,
        setRecipeCollectionData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const AppState = () => {
  return useContext(AppContext);
};
