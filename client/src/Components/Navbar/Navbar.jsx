import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Nav">
            <button className='Nav1'> <NavLink className='Nav1' to='/'> Home </NavLink> </button>
            <button className='Nav2'> <NavLink className='Nav2' to='/pokemons'> Pokemons </NavLink> </button>
            <button className='Nav3'> <NavLink className='Nav3' to='/form'> Create Pokemon </NavLink> </button>
        </div>
    )
};

export default Navbar;