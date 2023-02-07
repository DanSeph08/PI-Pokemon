import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="Nav">
            <button className='Nav1'> <NavLink to='/'> Home </NavLink> </button>
            <button className='Nav2'> <NavLink to='/pokemons'> Pokemons </NavLink> </button>
            <button className='Nav3'> <NavLink to='/form'> Create Pokemon </NavLink> </button>
        </div>
    )
};

export default Navbar;