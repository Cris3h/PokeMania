import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer  from './slices/pokeSlice';

export const store = configureStore({
    //acá estan los states
    reducer: {
        pokemonReducer
    }
})
