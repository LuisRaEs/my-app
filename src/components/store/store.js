import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from './slices/movies'
import { usersReducer } from "./slices/users";

export const store = configureStore({
    reducer:{
        movies: moviesReducer,
        users : usersReducer
    }
})