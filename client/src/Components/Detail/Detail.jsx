import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearDetail, getById } from "../../Redux/Actions";
import Navbar from "../Navbar/Navbar";

const Detail = () => {

    const dispatch = useDispatch();
    const PokeDetails = useSelector(state => state.pokeDetail);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getById(id));

        return function () {
            dispatch(clearDetail());
        };

    }, [dispatch, id]);

    return (
        <div className="Detail">
            <div id="NavId">
                <Navbar />
            </div>

            <h3>Detail Pokemon</h3>
            <p>{PokeDetails.name}</p>
            <img src={PokeDetails.image} alt="Imagen Pokemon" />
            <p>{PokeDetails.life}</p>
            <p>{PokeDetails.attack}</p>
            <p>{PokeDetails.defense}</p>
            <p>{PokeDetails.speed}</p>
            <p>{PokeDetails.height}</p>
            <p>{PokeDetails.weight}</p>
            <p>{PokeDetails.types?.map(elem => elem.name)}</p>

        </div>
    )
};

export default Detail;