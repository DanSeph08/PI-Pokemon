import React from "react";
import { NavLink } from 'react-router-dom';

const Card = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className="Cards">
            <h3 className="NamePoke"> {pokemon.name} </h3>
            <NavLink to={`/pokemons/${pokemon.id}`}> <img className="ImgPokemon" src={pokemon.image?pokemon.image:pokemon[0].image} alt="Pokemons" width='350vw' height='250vh'/></NavLink>
            <p className="PokeTypes">{pokemon.types?.map(elem => elem.name)} </p>
        </div>
    )
};

export default Card;
    