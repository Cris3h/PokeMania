"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonFromAPI, getTypesFromAPI } from '../../redux/actions/'

// import dataFetch from '../../redux/actions'


function PokemonHome () {
    const { pokemon } = useSelector(state=> state.pokemonReducer);
    const { types } = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonFromAPI())
        dispatch(getTypesFromAPI())
    }, [])


    // console.log(types)
    return(
        <div>
            {
                pokemon ? pokemon.map((poke) => (
                    <div key={poke.id}>
                    <p>{poke.name}</p>
                    <img src={poke.img}></img>
                    <Link href={`pokemon/${poke.id}`}> stats </Link>
                    </div>
                )) : 'jeje'
            }
        </div>
    )
}

export default PokemonHome