import React from "react";
import { createSlice } from '@reduxjs/toolkit';

const favoritereducer=createSlice({
    name:'favorites',
    initialState:{array:[]},
    reducers:{
        add_favorite:(state,action)=>{state.array.push(action.payload)},
        remove_favorite:(state,action)=>{
            const id=action.payload.id
            state.array=state.array.filter(recipe=>recipe.id!=id)
        },
    },
})

export const {add_favorite,remove_favorite}=favoritereducer.actions;
export default favoritereducer.reducer;