
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove_favorite } from "./Favorite";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.array);
  const dispatch = useDispatch();

  if (!favorites.length) {
    return <p className="text-center pt-10">No favorites added yet.</p>;
  }

  return (
    <div className="p-6 space-y-6">
      {favorites.map((meal) => (
        <div
          key={meal.idMeal}
          className="bg-slate-700 text-black p-4 rounded-xl shadow-md max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-2">{meal.strMeal}</h2>
          <div className="flex">
                <div>
                    <img
                    src={meal.strMealThumb}
                    alt={meal.strMeal}
                    className="w-[100px] rounded-lg mb-3"
                />
            </div>
            <div className="mx-6">
                <p><strong>Category:</strong> {meal.strCategory}</p>
                <p><strong>Area:</strong> {meal.strArea}</p>
            </div>
          </div>
          
          
          <button
            onClick={() => dispatch(remove_favorite(meal.idMeal))}
            className="mt-3 bg-rose-400 text-white px-4 py-2 rounded-lg"
          >
            Remove from Favorites
          </button>
        </div>
      ))}
    </div>
  );
}
