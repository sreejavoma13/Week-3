import React from "react";
import { useParams } from "react-router-dom";
import { useGetRecipeBySearchQuery } from "../api/recipeapi";
import { add_favorite } from "../Favorite";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchResults() {
  const { query } = useParams();
  const { data, error, isLoading } = useGetRecipeBySearchQuery(query);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) return <p className="text-center pt-10">Loading...</p>;
  if (error || !data?.meals) return <p className="text-center pt-10">No recipes found.</p>;

  return (
    <div className="p-6 space-y-6">
        {data.meals.map((meal) => (  
        <div
          key={meal.idMeal}
          className="bg-slate-700 text-black p-4 rounded-xl shadow-md  mx-auto w-[1000px] flex flex-col border-rose-400 border-2 drop-shadow-[0_4px_15px_rgba(251,113,133,0.5)]">
          <div>
          <h2 className="text-2xl font-bold mb-2 ">{meal.strMeal}</h2>
          </div>
          <div className="flex">
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className=" w-[400px] rounded-lg mb-3"
            />
            <div className="px-5"> 
                <p><strong>Category:</strong> {meal.strCategory}</p>
                <p><strong>Area:</strong> {meal.strArea}</p>
                <p><strong>Instructions:</strong> {meal.strInstructions}</p>
                <button className="mx-38 bg-slate-500 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-400 "onClick={() => {
                dispatch(add_favorite(meal));
                navigate("/favorites");
  }}>Add to favorites ❤️ </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

