import axios from 'axios';

export const GET_ALL_POKES = 'GET_ALL_POKES';
export const GET_BY_NAME = 'GET_BY_NAME'; 
export const GET_BY_ID = 'GET_BY_ID';
export const ERROR = 'ERROR';

export const getAllPokemons = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/pokemons');
            const pokemons = response.data;
            return dispatch({
                type: GET_ALL_POKES,
                payload: pokemons
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
            const pokeName = response.data;
            return dispatch({
                type: GET_BY_NAME,
                payload: pokeName
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};

export const getById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`http://localhost:3001/pokemons/` + id);
            const pokeId = response.data;
            return dispatch({
                type: GET_BY_ID,
                payload: pokeId
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error
            });
        }
    }
};