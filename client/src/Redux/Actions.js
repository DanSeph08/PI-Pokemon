import axios from 'axios';

export const GET_ALL_POKES = 'GET_ALL_POKES';
export const GET_BY_NAME = 'GET_BY_NAME'; 
export const GET_BY_ID = 'GET_BY_ID';
export const GET_TYPES = 'GET_TYPES';
export const POST_FORM = 'POST_FORM';
export const CLEAR_DETAIL = 'CLEAR_DETAIL';
export const FILTER_STATUS = 'FILTER_STATUS';
export const FILTER_TYPE = 'FILTER_TYPE';
export const ORDER_ASC_DESC = 'ORDER_ASC_DESC';
export const ERROR = 'ERROR';

export const getAllPokemons = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('pokemons');
            const pokemons = response.data;
            return dispatch({
                type: GET_ALL_POKES,
                payload: pokemons
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const getByName = (name) => {
    return async function (dispatch) {
        try {
            const response = await axios.get("pokemons?name=" + name);
            const pokeName = response.data;
            return dispatch({
                type: GET_BY_NAME,
                payload: pokeName
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const getById = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.get(`pokemons/${id}`);
            const pokeId = response.data;
            return dispatch({
                type: GET_BY_ID,
                payload: pokeId
            });
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};  

export const getTypes = () => {
    return async function (dispatch) {
        try {
            const response = await axios.get('types');
            const types = response.data;
            return dispatch({
                type: GET_TYPES,
                payload: types
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const postForm = (body) => {
    return async function (dispatch) {
        try {
            await axios.post('pokemon', body);
            dispatch({
                type: POST_FORM
            })
        } catch (error) {
            return dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const clearDetail = () => {
    return { type: CLEAR_DETAIL };
};

export const filterStatus = (value) => {
    return dispatch => {
        try {
            console.log(value);
            dispatch({
                type: FILTER_STATUS,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const filterType = (value) => {
    return dispatch => {
        try {
            console.log(value);
            dispatch({
                type: FILTER_TYPE,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};

export const OrderAscOrDesc = (value) => {
    return dispatch => {
        try {
            console.log(value);
            dispatch({
                type: ORDER_ASC_DESC,
                payload: value,
            })
        } catch (error) {
            dispatch({
                type: ERROR,
                payload: error.message
            });
        }
    }
};