import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getByName } from "../../Redux/Actions";

const InputName = () => {
    const dispatch = useDispatch();
    const PokeName = useSelector(state => state.pokeName);
    const [searchName, setSearchName] = useState('');

    const handleClickSubmit = (event) => {
        event.preventDefault();
        dispatch(getByName(searchName));
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchName(event.target.value);
    };

    return (
        <div className="InputName">
            <form onSubmit={(event) => handleClickSubmit(event)} >
                
                <label className="TitleLabel" htmlFor="searching"> Pokemon: {''} </label>

                <input className="Input" type="text" name="searching" placeholder="Search Pokemons" onChange={(event) => handleInputChange(event)} value={searchName} />

                <button className="Butt" type="submit">Search</button>
            </form>
            <div className="ListSearch">
                <ul className="Ul">
                    {PokeName.map((pokemon) => {
                        return (
                            <li className="Li" key={pokemon.id}>
                                <NavLink key={pokemon.id} to={`/pokemons/${pokemon.id}`}>
                                    <span className="Name">{pokemon.name}</span>
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>    
            </div>
        </div>
    )
};

export default InputName;