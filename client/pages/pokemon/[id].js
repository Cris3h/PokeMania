import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById } from "../../redux/actions";
import { useRouter } from "next/router";

function PokeDetails() {
  const { pokemonId } = useSelector((state) => state.pokemonReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;



//  console.log(id);

  useEffect(() => {
    dispatch(getPokemonById(id));
  }, [dispatch, id]);

  return(
    <div>
      {/* que el detail sea una pokedex */}
        {pokemonId ? <p>{pokemonId.name}</p> : <p>F en el chat</p>}
    </div>
  )
}

export default PokeDetails;
