import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const recipeapi=createApi({
    reducerPath:"recipeapi",
    baseQuery:fetchBaseQuery({baseUrl:'https://www.themealdb.com/api'}),
    endpoints:(builder)=>({
        getRecipeBySearch: builder.query({
            query: (searchQuery) => `/json/v1/1/search.php?s=${searchQuery}`,
        }),
        getSingleRandom:builder.query({
            query:() => "/json/v1/1/random.php",
        }),
    }),
})

export const { useGetRecipeBySearchQuery,useGetSingleRandomQuery } = recipeapi;