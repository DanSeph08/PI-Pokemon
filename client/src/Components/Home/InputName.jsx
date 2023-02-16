import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getByName } from "../../Redux/Actions";
import './Css/InputName.css';

const InputName = () => {
    const dispatch = useDispatch();
    const [searchName, setSearchName] = useState('');

    const handleClickSubmit = (event) => {
        event.preventDefault();
        dispatch(getByName(searchName));
    };

    const handleInputChange = (event) => {
        event.preventDefault();
        setSearchName(event.target.value);
        console.log(searchName);
    };

    return (
        <div className="InputName">

            <input className="Input" type="text" placeholder="Search Pokemons" onChange={(event) => handleInputChange(event)} />

            <button className="Butt" type="submit" onClick={(event) => handleClickSubmit(event)} >Search</button>

        </div>
    )
};

export default InputName;