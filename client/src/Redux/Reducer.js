import {
    ERROR,
    GET_ALL_POKES,
    GET_BY_NAME,
    GET_BY_ID,
    GET_TYPES,
    CLEAR_DETAIL,
    POST_FORM,
    FILTER_STATUS,
    FILTER_TYPE,
    ORDER_ASC_DESC
} from './Actions';

const initialState = {
    pokemons: [],
    pokeDetail: {},
    filters: [],
    types: [],
    error: {}
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_POKES:
            return {
                ...state,
                pokemons: action.payload,
                filters: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload,
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
        case POST_FORM:
            return {
                ...state
            }
        case FILTER_STATUS:
            const allPokemons = state.filters
            if (action.payload === 'Api') {
                let pokeApi = [];
                for (let i = 0; i < allPokemons.length; i++) {
                    if (typeof allPokemons[i].id === 'number') {
                        pokeApi.push(allPokemons[i])
                    }
                }
                return {
                    ...state,
                    pokemons: pokeApi
                }
            }
            else if (action.payload === 'Created') {
                let pokeApi = [];
                for (let i = 0; i < allPokemons.length; i++) {
                    if (allPokemons[i].id.length > 4) {
                        pokeApi.push(allPokemons[i])
                    }
                }
                return {
                    ...state,
                    pokemons: pokeApi
                }
            }
            else {
                return {
                    ...state,
                    pokemons: state.filters
                }
            }  
        case FILTER_TYPE:
            const allTypes = state.pokemons;
            const filterType = action.payload === 'All' ? allTypes : allTypes.filter(pok => pok.types.map(type => type.name).includes(action.payload));
            return {
                ...state,
                filters: filterType.length ? filterType : [`Pokemons ${action.payload} not found`]
            }
        case ORDER_ASC_DESC:
            const OrderAll = state.filters;
            if (action.payload === 'az') {
                const az = OrderAll.sort((p1, p2) => {
                    if (p1.name < p2.name) {
                        return -1;
                    }
                    return 1;
                })
                return {
                    ...state,
                    pokemons: [...az]
                }
            }
            else if (action.payload === 'za') {
                const za = OrderAll.sort((p1, p2) => {
                    if (p1.name < p2.name) {
                        return 1
                    }
                    return -1
                })    
                return {
                    ...state,
                    pokemons: [...za]
                }
            }
            else if (action.payload === 'ha') {
                const ha = OrderAll.sort((p1, p2) => {
                    if (p1.attack < p2.attack) {
                        return 1
                    }
                    return -1
                })
                return {
                    ...state,
                    pokemons: [...ha]
                }
            }
            else if (action.payload === 'la') {
                const la = OrderAll.sort((p1, p2) => {
                    if (p1.attack < p2.attack) {
                        return -1
                    }
                    return 1
                })
                return {
                    ...state,
                    pokemons: [...la]
                }
            }
            else {
                return {
                    ...state,
                    pokemons: [...state.pokemons]
                }
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