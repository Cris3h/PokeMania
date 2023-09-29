"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonFromAPI, getTypesFromAPI } from '../../redux/actions/'
import PokemonCard from "./PokemonCard";
import '../../styles/pokemonHome.css'

function PokemonHome () {
    const { pokemon } = useSelector(state=> state.pokemonReducer);
    // const { types } = useSelector(state => state.pokemonReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemonFromAPI())
        dispatch(getTypesFromAPI())
    }, [])

    return(
        <div className="main-card-container">
            {
                pokemon ? pokemon.map((poke) => (
                    <div key={poke.id}>
                        <PokemonCard 
                        name={poke.name}
                        img={poke.img}
                        attack={poke.attack}
                        type={poke.type}
                        link={poke.id}
                        />
                    </div>
                )) : 'jeje'
            }
        </div>
    )
}

export default PokemonHome

{/*

type={poke.type.map(p => p.type ? p.type.map(t=> t) : null)}

<p>{poke.name}</p>
<img src={poke.img}></img>

*/}