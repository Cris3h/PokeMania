import { createSlice } from "@reduxjs/toolkit";
import { sortByPower, sortByName, filterByType } from "@/helpers";
import { filterPokemonByType } from "../actions";

// const initialState = {};

export const pokemonReducer = createSlice({
  name: "pokemon",
  initialState: {
    pokemon: [],
    pokemonSort: [],
    pokemonFilter: [],
    pokemonId: {},
    types: [],
  },
  reducers: {
    setAllPokemon: (state, action) => {
      state.pokemon = action.payload;
      state.pokemonSort = action.payload;
      state.pokemonFilter = action.payload; 
    },
    setPokemonById: (state, action) => {
      state.pokemonId = action.payload;
    },
    setPokemonTypes: (state, action) => {
      state.types = action.payload;
    },
    setPokemonSort: (state, action) => {
      state.pokemon = sortByPower(state.pokemonSort, action.payload)      
      console.log(state.pokemon, action.payload)
    },
    setPokemonByName: (state, action) => { 
      state.pokemon = sortByName(state.pokemonSort, action.payload)
      console.log(state.pokemon, action.payload)
    },
    setPokemonByType: (state, action) => {
      state.pokemon = filterByType(state.pokemonFilter, action.payload)
      console.log(state.pokemon, action.payload)
    },
  },
});

export const { 
  setAllPokemon,
  setPokemonById,
  setPokemonTypes,
  setPokemonSort,
  setPokemonByName,
  setPokemonByType,

  } = pokemonReducer.actions;
export default pokemonReducer.reducer;
