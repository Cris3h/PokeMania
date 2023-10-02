import React from "react";
import Link from "next/link";
import Image from "next/image";

import PokemonHome from "../src/components/cards/PokemonHome";

import pokemonMania from "../images/pokemonMania.png";
import "../styles/pokemon.css";
import Navbar from "@/components/bars/Navbar";

function pokemon() {
  return (
      <div className="body-home">
          <div className="navbar-container">
            <Navbar />
          </div>
        <div className="home-image-container">
          <Image
            src={pokemonMania}
            alt="pokemon-font"
            border="0"
            height={66}
            width={593}
            className="image-home-bg"
          />
        </div>
        <div className="pokemonCards-container">
          <PokemonHome />
        </div>
        <div className="link-create-container">
          <Link href="/create"> create a new one</Link>
        </div>
      </div>
  );
}

export default pokemon;
