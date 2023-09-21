const { Pokemon, Type } = require("../../db");
const { allInfo, getPokemonById } = require("../dataController");

const searchAllPokemonsOrByName = async (req, res) => {
  const { name } = req.query;
  const allData = await allInfo();
  if (name) {
    const pokemonByName = await allData.find((e) => 
      e.name.toLowerCase() === name.toLowerCase()
    );

    pokemonByName
      ? res.status(200).send(pokemonByName)
      : res.status(400).send(`${name} isn't a available pokemon, try again`);
  } else {
    //si no hay query
    res.status(200).send(allData);
  }
};

const searchPokemonById = async (req, res) => {
  const { id } = req.params;
  if (!id.includes("-")) {
    try {
      const pokemonData = await getPokemonById(id);
      res.status(200).json(pokemonData);
    } catch (error) {
      console.error(error);
    }
  } else {
    try {
      const dbPokemonData = await searchPokeIdDB();
      res.status(200).json(dbPokemonData);
    } catch (error) {
      console.error(error);
    }
  }
};

module.exports = {
  searchAllPokemonsOrByName,
  searchPokemonById,
};
