import {combineReducers} from "redux"
import PokemonListReducer from "./PokemonListReducer";
import PokemonMultipleReducer from "./PokemonReducer";

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    PokemonMultiple : PokemonMultipleReducer
});

export default RootReducer;