const { Router } = require('express');
const { searchAllPokemonsOrByName, searchPokemonById } = require('../controllers/pokemonController')
const { getTypesPokemon } = require('../controllers/typeController')
const router = Router();


router.get('/pokemon', searchAllPokemonsOrByName)

router.get('/pokemon/:id', searchPokemonById)

router.get('/types', getTypesPokemon);




module.exports = router; 