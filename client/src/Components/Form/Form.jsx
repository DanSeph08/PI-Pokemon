import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, postForm } from "../../Redux/Actions";
import Navbar from '../Navbar/Navbar';
import Gif from '../../Imgs/Pokemon-gifs-7.gif';
import './Form.css';

const validate = (input) => {
    const errors = {}
    const regexp = /^[a-z\s]*$/
    const regexpImg = /.*(png|jpg|jpeg|gif)$/

    if (!input.name) {
        errors.name = 'Name is required'
    }
    if (!regexp.test(input.name)){
        errors.name = 'Lower case is required & numbers is not acepted'
    }
    if (!input.life.length) {
        errors.life = "Health is required";
    }
    if (!input.attack.length) {
        errors.attack = "Attack is required";
    }
    if (!input.defense.length) {
        errors.defense = "Defense is required";
    }
    if (input.speed < 0 || input.speed > 500) {
        errors.speed = "Speed is invalid";
    }
    if (input.height < 0 || input.height > 500) {
        errors.height = "Height is invalid";
    }
    if (input.weight < 0 || input.weight > 500 ) {
        errors.weight = "Weight is invalid";
    }
    if (!input.image) {
        errors.image = "Image is required";
    }
    if (!regexpImg.test(input.image)) {
        errors.image = "Url is required";
    }
    if (!input.types.length) {
        errors.types = "Types is required";
    }
    return errors;
};

const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);
    const [create, setCreate] = useState(false);

    useEffect(() => {
        dispatch(getTypes());
    }, [dispatch])

    const [input, setInput] = useState({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: []
    });

    const [errors, setErrors] = useState({
        name: "",
        life: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        image: "",
        types: "",
    });

    const handleInputChange = (event) => {
        const value = event.target.value;
        const property = event.target.name;
        setInput({
            ...input, [property]: value
        });
        setErrors(validate({
            ...input, [property]: value
        }));
    };

    const handleClickSubmit = (event) => {
            dispatch(postForm(input));
            setCreate(true);
            alert('Pokemon Create!');
            event.preventDefault();
    };

    return (
        <div className="Cont">
            <div>
                <Navbar id="NavId" />
            </div>
            <form className="FormAll">
                <h3 className="TitleForm">Create Your Pokemon</h3>
                <div className="Space">
                    <label className="FormName" htmlFor="name">Name: </label>
                    <input type="text" id="FormBut" name="name" value={input.name} onChange={handleInputChange} className={errors.name && "danger"} />
                    {errors.name && <p className="dangerus"> {errors.name} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="life">Health: </label>
                    <input type="number" id="FormBut" name="life" value={input.life} onChange={handleInputChange} className={errors.life && "danger"} min='0' max='500' />
                    {errors.life && <p className="dangerus"> {errors.life} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="attack">Attack: </label>
                    <input type="number" id="FormBut" name="attack" value={input.attack} onChange={handleInputChange} className={errors.attack && "danger"} min='0' max='500' />
                    {errors.attack && <p className="dangerus"> {errors.attack} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="defense">Defense: </label>
                    <input type="number" id="FormBut" name="defense" value={input.defense} onChange={handleInputChange} className={errors.defense && "danger"} min='0' max='500' />
                    {errors.defense && <p className="dangerus"> {errors.defense} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="speed">Speed: </label>
                    <input type="number" id="FormBut" name="speed" value={input.speed} onChange={handleInputChange} className={errors.speed && "danger"} min='0' max='500' />
                    {errors.speed && <p className="dangerus"> {errors.speed} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="height">Height: </label>
                    <input type="number" id="FormBut" name="height" value={input.height} onChange={handleInputChange} className={errors.height && "danger"} min='0' max='500' />
                    {errors.height && <p className="dangerus"> {errors.height} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="weight">Weight: </label>
                    <input type="number" id="FormBut" name="weight" value={input.weight} onChange={handleInputChange} className={errors.weight && "danger"} min='0' max='500' />
                    {errors.weight && <p className="dangerus"> {errors.weight} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="image">Image: </label>
                    <input type="file" id="FormBut" name="image" value={input.image} onChange={handleInputChange} className={errors.image && "danger"} />
                    {errors.image && <p className="dangerus"> {errors.image} </p>}
                </div>
                <div className="Space">
                    <label className="FormName" htmlFor="types">Types: </label>
                    <select name="types" id="FormBut" onChange={handleInputChange} className={errors.types && "danger"}>
                        {types.map(typ => {
                            return (
                                <option value={typ.name} key={typ.id}>
                                    {typ.name}
                                </option>
                            );
                        })}
                    </select>
                    {errors.types && <p className="dangerus"> {errors.types} </p>}
                </div>

                {Object.entries(errors).length ? (<span id="ButtonOpen">Disabled Button</span>) : (<button className="ButSubmit" type='submit' onClick={handleClickSubmit}> Create New Pokemon</button>)}
                
                {create ? <p id="CreatePokemon">Pokemon created</p> : <></>}

            </form>
            {!Object.entries(errors).length && <img className="Finally" src={Gif} alt="Gif" width="180px" height="150px" />}
        </div>
    )
};

export default Form;