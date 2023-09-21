import React from "react";
import Link from "next/link";

import PokemonCreate from '../src/components/PokemonCreate'


function create(){
    return (
        <>
        <PokemonCreate/>
        <Link href='/pokemon'> back </Link>
        </>
    )
}

export default create;