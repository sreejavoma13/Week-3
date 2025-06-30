import React from "react";
import {useGetSingleRandomQuery} from '../api/recipeapi'

export default function Randomresults(){
    const { data, error, isLoading } = useGetSingleRandomQuery();
    if (isLoading) return <p className="text-center pt-10">Loading...</p>;
    if (error || !data?.meals) return <p className="text-center pt-10">No recipes found.</p>;

    return(
    <div className="p-6 space-y-6">
        {data.meals.map((meal) => (  
        <div
          key={meal.idMeal}
          className="bg-slate-700 text-black p-4 rounded-xl shadow-md  mx-auto w-[1000px] flex flex-col border-rose-400 border-2 drop-shadow-[0_4px_15px_rgba(251,113,133,0.5)]">
          <div>
          <h2 className="text-2xl font-bold mb-2 text-rose-600">{meal.strMeal}</h2>
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
            </div>
          </div>
        </div>
      ))}
    </div>
    )
}