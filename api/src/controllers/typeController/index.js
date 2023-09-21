const axios = require("axios");

const { apiURLType } = require('../../utils/config')
const { Type } = require("../../db");

const getTypesPokemon = async (req, res) => {
    console.log('aca llega?')
  try {
    console.log('entra?')
    const apiCall = await axios(apiURLType);
    const types = apiCall.data.results.map((e) => e.name);
    types.forEach((e) => {
      Type.findOrCreate({
        where: { type: e },
      });
    });
    const typesDb = await Type.findAll();
    res.status(200).send(typesDb)
  } catch (error) {
    console.error(error);
  }
};


module.exports = {
    getTypesPokemon,
}
