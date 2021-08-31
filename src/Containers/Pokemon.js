import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {GetPokemon} from "../actions/pokemonActions";
import _ from "lodash";

const Pokemon = (props) => {

    console.log(props);

    const pokemonName = props.match.params.pokemon;
    console.log(pokemonName);

    const dispatch = useDispatch();
    const pokemonState = useSelector(state => state.PokemonMultiple);

    React.useEffect(() => {
        dispatch(GetPokemon(pokemonName))
    }, []);

    console.log(pokemonState);

    const ShowData = () => {
        if (!_.isEmpty(pokemonState.data[pokemonName])) {
            const poke = pokemonState.data[pokemonName];
            console.log("poke", poke);
            return (
                <div className={"pokemon-wrapper"}>
                    <div className={"item"}>
                        <h1>Spires</h1>
                        <img src={poke.sprites.front_default} alt=""/>
                        <img src={poke.sprites.back_default} alt=""/>
                        <img src={poke.sprites.front_shiny} alt=""/>
                        <img src={poke.sprites.back_shiny} alt=""/>
                    </div>
                    <div className={"item"}>
                        <h1>Stats</h1>
                        {poke.stats.map(el => {
                            return <p>{el.stat.name} {el.base_stat}</p>
                        })}
                    </div>
                    <div className={"item"}>
                        <h1>Abilities</h1>
                        {poke.abilities.map(el => {
                            return <p>{el.ability.name}</p>
                        })}
                    </div>
                </div>
            )
        }

        if (pokemonState.loading) {
            return <p>Loading...</p>;
        }

        if (pokemonState.errorMsg !== "") {
            return <p>{pokemonState.errorMsg}</p>;
        }

        return <p>Error getting pokemon</p>;
    }

    return (
        <div className={"poke"}>
            <h1>{pokemonName}</h1>
            {ShowData()}
        </div>
    )
};

export default Pokemon;