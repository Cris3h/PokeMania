const axios = require('axios');
const { Pokemon, Type } = require('../../db');
const { apiURL, request, apiURLID } = require('../../utils/config/index');



const getPokemonLoop = (c)=>{
    return c.map((r) => axios(`${r.url}`))
}


const getApiData = async () => {
    const apiData = await axios(`${apiURL}${request}`);
    const response = apiData.data.results;
    try{
        const getAllPokemons = await Promise.all(getPokemonLoop(response))
        const pokemonObject = getAllPokemons.map((e) => {
            return{
                id: e.data.id,
                name: e.data.name,
                attack: e.data.stats[1].base_stat,
                img: e.data.sprites.other.dream_world.front_default,
                type: e.data.types.map(e=> e.type.name),
                dbPokemon: false,
            }
        })
        console.log('lo hicimos!', apiData.data)
        return pokemonObject;
    } catch(error){
        console.error(error)
    }
}


const getDbData = async ()=> {
    const results = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['type'],
            through: {
                attributes: [],
            }
        }
    })
    const allDbData = results.map((e)=> ({
        id: e.id,
        name: e.name,
        attack: e.attack,
        img: e.img,
        type: e.dataValues.types.map((e) => e.dataValues.type), // .flat()
        dbPokemon: true,
    }))
    console.log('lo logramos chico!', allDbData)
    return allDbData;
}


const getPokemonById = async (id)=>{
    try{
        const idApiPokemon = await axios(`${apiURLID}/${id}`)
        //being only one object in the response we can assign properties
        const idPokemon = {
            id: idApiPokemon.data.id,
            name: idApiPokemon.data.name,
            healtpoints: idApiPokemon.data.stats[0].base_stat,
            attack: idApiPokemon.data.stats[1].base_stat,
            defense: idApiPokemon.data.stats[2].base_stat,
            speed: idApiPokemon.data.stats[5].base_stat,
            height: idApiPokemon.data.height,
            weight: idApiPokemon.data.weight,
            type: idApiPokemon.data.types.map(e => e.type.name),
            img: idApiPokemon.data.sprites.other.dream_world.front_default,
            dbPokemon: false
        }
        console.log('lo hicimos chico!', idPokemon)
        return idPokemon
    } catch(error){
        console.error(error)
    }
}

const searchPokeIdDB = async (id) => {
    const dataDB = await Pokemon.findByPk(id, {
      include: {
        model: Type,
        attribute: ["type"],
        through: {
          attribute: [],
        },
      },
    });
    // console.log("data -----------__>", dataDB.dataValues.types[0].dataValues);
    return {
      id:dataDB.dataValues.id,
      name: dataDB.dataValues.name,
      healtpoints: dataDB.dataValues.healtpoints,
      attack: dataDB.dataValues.attack,
      defense: dataDB.dataValues.defense,
      speed: dataDB.dataValues.speed,
      height: dataDB.dataValues.height,
      weight: dataDB.dataValues.weight,
      img: dataDB.dataValues.img,
      dbPokemon: true,
      type: dataDB.dataValues.types.map((e) => e.dataValues.type),
    };
  };


const allInfo = async () => {
    const apiCall = await getApiData();
    const dbCall = await getDbData();
    const allPokemons = [...apiCall, ...dbCall];
    return allPokemons;
}


module.exports = {
    getApiData,
    getDbData,
    getPokemonById,
    searchPokeIdDB,
    allInfo,
}