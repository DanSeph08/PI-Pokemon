import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css';

const LandingPage = () => {
    return (
        <div className="Landing">
            <h1 className="Title">¡Welcome to the pokemon world!</h1>
            <button className="ButtonHome"> <NavLink to='/pokemons'>Pokemons</NavLink></button>
            <h5 className="Author">PI Daniel Pinzón</h5>
        </div>
    )
};

export default LandingPage;