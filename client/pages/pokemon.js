import React from "react";
import Link from "next/link";
import Image from "next/image";
import pokemonMania from '../images/pokemonMania.png'
import PokemonHome from "../src/components/PokemonHome";
import '../styles/pokemon.css'

function pokemon() {
  return (
    <>
    <div className="home-container">
        <Image
          src={pokemonMania}
          alt="pokemon-font"
          border="0"
          height={66}
          width={593}
        />
      <PokemonHome />
      <Link href="/create"> create a new one</Link>
    </div>
    </>
  );
}

export default pokemon;
//593w 66h