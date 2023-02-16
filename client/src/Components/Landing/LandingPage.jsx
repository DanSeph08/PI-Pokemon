import React from "react";
import { NavLink } from "react-router-dom";
import './Landing.css';

const LandingPage = () => {
    return (
        <div className="Landing">
            <h1 className="Title">¡Welcome to the pokemon world!</h1>
            <button className="ButtonHome"> <NavLink className="ButtonHome" to='/pokemons'>Pokemons</NavLink></button>
            <h5 className="Author"> <a className="Author" href="https://www.linkedin.com/in/danielpinzon08/" target="_blank" rel="noreferrer">PI Daniel Pinzón</a></h5>
        </div>
    )
};

export default LandingPage;