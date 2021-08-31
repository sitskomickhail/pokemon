import {act} from "@testing-library/react";

const DefaultState = {
    loading: false,
    data: {},
    errorMsg: ""
};

const PokemonMultipleReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ""
            };
        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                loading: true,
                errorMsg: "unable to find pokemon"
            };
        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: true,
                errorMsg: "",
                data: {
                    ...state.data,
                    [action.pokemonName] : action.payload
                }
            };
        default:
            return state;
    }
}

export default PokemonMultipleReducer;
