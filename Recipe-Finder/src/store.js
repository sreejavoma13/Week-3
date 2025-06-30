import { configureStore } from "@reduxjs/toolkit";
import { recipeapi } from "./api/recipeapi"; 
import favoritereducer from "./Favorite.jsx"
export const store = configureStore({
  reducer: {
    [recipeapi.reducerPath]: recipeapi.reducer,
    favorites:favoritereducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeapi.middleware),
});