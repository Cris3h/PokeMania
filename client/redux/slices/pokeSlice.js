import { createSlice } from "@reduxjs/toolkit";

// const initialState = {};

export const pokemonReducer = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
    pokemonId: {},
    types: [],
  },
  reducers: {
    setAllPokemon: (state, action) => {
      state.pokemon = action.payload;
    },
    setPokemonById: (state, action) => {
      state.pokemonId = action.payload;
    },
    setPokemonTypes: (state, action) => {
      state.types = action.payload;
    },
  },
});

export const { 
  setAllPokemon,
  setPokemonById,
  setPokemonTypes,

  } = pokemonReducer.actions;
export default pokemonReducer.reducer;
