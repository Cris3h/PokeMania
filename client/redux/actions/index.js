import axios from 'axios';
import { setAllPokemon, 
    setPokemonById,
    setPokemonTypes,
    setPokemonSort,
    setPokemonByName,
    setPokemonByType, } from '../slices/pokeSlice'; 

export const getPokemonFromAPI = () => async (dispatch)=>{
    try {
        const dataPromisse = await axios('http://localhost:3001/pokemon');
        const apiData = dataPromisse.data;
        dispatch(setAllPokemon(apiData));
    } catch (error) {
        console.error(error);
    };
};

export const getPokemonById = (id) => async (dispatch) => {
    try {
        const dataPromisse = await axios(`http://localhost:3001/pokemon/${id}`);
        const apiData = dataPromisse.data;
        dispatch(setPokemonById(apiData));
    } catch (error) {
        console.error(error)
    };
}

export const getPokemonByName = (name) => async (dispatch) => {
    try {
        const dataPromisse = await axios(`http://localhost:3001/pokemon?name=${name}`);
        const apiData = dataPromisse.data;
        dispatch(setPokemonByName(apiData));
    } catch (error) {
        console.error(error);
    };
};

export const getTypesFromAPI = () => async (dispatch) =>{
    try {
        const dataPromisse = await axios(`http://localhost:3001/types`);
        const apiData = dataPromisse.data;
        dispatch(setPokemonTypes(apiData));
    } catch (error) {
        console.error(error);
    };
};


export const sortPokemonByPower = (payload) => (dispatch) => {
    return dispatch(setPokemonSort(payload))
}

export const sortPokemonByName = (payload) => (dispatch) => {
    return dispatch(setPokemonByName(payload))
}

export const filterPokemonByType = (payload) => (dispatch) => {
    return dispatch(setPokemonByType(payload))
}































// class dataFetch {
//     constructor(){
//         this.BASE_URL = `http://localhost:3001/pokemon`,
//         this.URL_TYPES = `http://localhost:3001/types`
//     }

//     async getPokemonFromAPI(dispatch){
//         try {
//             const dataPromisse = await axios(this.BASE_URL)
//             const apiData = dataPromisse.data
//             //llega
//             dispatch(setAllPokemon(apiData))
//         } catch (error) {
//             console.error(error)
//         }
//     } 

//     async getPokemonById(id, dispatch){
//         try {
//             const dataPromisse = await axios(`${this.BASE_URL}/${id}`)
//             const apiData = dataPromisse.data
//             //llega
//             dispatch(setPokemonById(apiData))
//         } catch (error) {
//             console.error(error)
//         }
//     }

//     async getTypesFromAPI(dispatch){
//         try {
//             const dataPromisse = await axios(this.URL_TYPES)
//             const apiData = dataPromisse.data
//             //llega
//             dispatch(setPokemonTypes(apiData))
//         } catch (error) {
//             console.error(error)
//         }
//     }
// }

// export default new dataFetch();