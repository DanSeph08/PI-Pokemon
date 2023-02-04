import {
    ERROR,
    GET_ALL_POKES,
    GET_BY_NAME,
    GET_BY_ID
} from './Actions';

const initialState = {
    pokemons: [],
    pokeName: [],
    pokeDetail: {},
    error: {}
}

function rootReducer(state = initialState, action) {
    switch (action.payload) {
        case GET_ALL_POKES:
            return {
                ...state,
                pokemons: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokeName: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                pokeDetail: action.payload
            }
        case ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return { ...state };
    }
};

export default rootReducer;