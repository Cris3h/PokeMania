import * as React from "react";
import Link from "next/link";
import Image from "next/image";


import CatchingPokemonRoundedIcon from '@mui/icons-material/CatchingPokemonRounded';
import "../../styles/PokemonCard.css";

export default function PokemonCard({ name, img, attack, type, link }) {
  const typeClassMap = {
    normal: 'normal-background',
    fighting: 'fighting-background',
    flying: 'flying-background',
    poison: 'poison-background',
    ground: 'ground-background',
    bug: 'bug-background',
    rock: 'rock-background',
    ghost: 'ghost-background',
    steel: 'steel-background',
    fire: 'fire-background',
    water: 'water-background',
    grass: 'grass-background',
    electric: 'electric-background',
    psychic: 'psychic-background',
    ice: 'ice-background',
    dark: 'dark-background',
    dragon: 'dragon-background',
    fairy: 'fairy-background',
    unknown: 'unknown-background',
    shadow: 'shadow-background',
  };
  const cardTypeClass = type.length > 0 ? typeClassMap[type[0]] : '';
  return (
    <>
      <div className={`card ${cardTypeClass}`}>
        
        <div className={`card-container ${cardTypeClass}`}>
          <div className="card-header-container">
            <div className="header-tag-container">
              <small>BASIC</small>
            </div>

            <p className="card-name">{name}</p>

            <div className="card-header-hp">
              <b>HP:</b>
              <p>60</p>
              <CatchingPokemonRoundedIcon className="header-icon" />
            </div>
          </div>

          <div className="card-image-container">
            <div className="card-image-container-border">
              <img src={img} alt="Imagen" className="card-img" />
            </div>
            <div className="card-image-description-container">
              <div className="card-image-description-border">
                <small className="card-image-description">
                  a strong pokemon
                </small>
              </div>
            </div>
          </div>

          <div className="card-description">
          <div className="description-type">
              {type.length > 1 ? <p>types: </p> : <p>type: </p>}

              {type?.map((t, i) => (
                <p key={i}>•{t}</p>
              ))}
            </div>
            <div className="description-attack">
              <p>attack points:</p>
              <p>{attack}</p>
            </div>
            <div className="card-link-container">
              {/* el detail que sea una pokedex */}
              <Link href={`/pokemon/${link}`} className="link-button"> PokeDex </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


