import React from "react";
import Link from "next/link";

import PokemonHome from '../src/components/PokemonHome'


function pokemon(){
    return (
        <>
        <PokemonHome/>
        <Link href='/create'> create a new one</Link>
        </>
    )
}

export default pokemon;