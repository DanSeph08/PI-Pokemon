import React from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../Redux/Actions";

const AllPokemons = () => {
    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getAllPokemons());
    };

    return (
        <div className="All">
            <button className="But" onClick={(event)=>handleClick(event)}> All Pokemons </button>
        </div>
    )
};

export default AllPokemons;