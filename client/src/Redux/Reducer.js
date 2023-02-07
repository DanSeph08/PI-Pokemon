import {
    ERROR,
    GET_ALL_POKES,
    GET_BY_NAME,
    GET_BY_ID,
    GET_TYPES,
    CLEAR_DETAIL
} from './Actions';

const initialState = {
    pokemons: [],
    pokeName: [],
    pokeDetail: {},
    types: [],
    error: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKES:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokeName: action.payload,
            }
        case GET_BY_ID:
            return {
                ...state,
                pokeDetail: action.payload,
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload,
            }
        case CLEAR_DETAIL:
            return {
                ...state,
                pokeDetail: [],
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