import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from "../../Redux/Actions";
import Card from "./Card";
import InputName from "./InputName";
import AllPokemons from "./AllPokemons";
import Page from "./Page";
import Navbar from "../Navbar/Navbar";

const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch]);

    const [currentPage, setCurrentPage] = useState(1);
    const [pokeXPage] = useState(12);
    const indexLast = currentPage * pokeXPage;
    const indexFirst = indexLast - pokeXPage;
    const currentPoke = pokemons.slice(indexFirst, indexLast);

    const page = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    if (currentPoke.length) {
        return (
            <div className="Home">
                <h1 className="Title">All Pokemons</h1>
                <div className="Navigation">
                    <Navbar />
                    <InputName />
                    <AllPokemons />
                </div>
                <div className="Container">
                    {currentPoke.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)}
                </div>
                <Page pokemons={pokemons.length} pokeXPage={pokeXPage} page={page} />
            </div>
        )
    } else {
        return (
            <>
                <h2 className="Loading">Loading...</h2>
                <h6 className="Please">Please Wait</h6>
            </>
        )
    }
};

export default Home;