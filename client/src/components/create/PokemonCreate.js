"use client"
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonFromAPI, getTypesFromAPI } from '../../../redux/actions'

function PokemonCreate () {
    const { types } = useSelector(state=> state.pokemonReducer)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTypesFromAPI())
    }, [])


    return (
        <div>
            <h1>componente create</h1>
        </div>
    )
    
}

export default PokemonCreate;