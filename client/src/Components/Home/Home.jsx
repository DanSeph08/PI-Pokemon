import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getAllPokemons } from "../../Redux/Actions";
import Card from "./Card";
import InputName from "./InputName";
import AllPokemons from "./AllPokemons";
import Page from "./Page";
import Filters from "./Filters";
import Navbar from '../Navbar/Navbar';
import Pica from '../../Imgs/abbe28a943ed44fcd98452687f7c46c9.gif';
import '../Home/Css/Home.css';
import '../Home/Css/Pre.css';
import '../Home/Css/Card.css'


const Home = () => {
    const dispatch = useDispatch();
    const pokemons = useSelector(state => state.pokemons);

    useEffect(() => {
        dispatch(getAllPokemons())
    }, [dispatch]);

    useEffect(() => {
        setCurrentPage(1)
    }, [pokemons.length])

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
                <div className="Navigation">
                <h1 className="Titles">All Pokemons</h1>
                    <Navbar />
                    <AllPokemons />
                    <Filters />
                    <InputName />
                </div>
                <div className="Container">
                    {currentPoke.map(pokemon => <Card key={pokemon.id} pokemon={pokemon} />)}
                </div>
                <Page pokemons={pokemons.length} pokeXPage={pokeXPage} page={page} />
            </div>
        )
    } else {
        return (
            <div className="Pre">
                <h2 className="Loading">Loading...</h2>
                <h6 className="Please">Please Wait...</h6>
                <img className="Pica" src={Pica} alt="Pica" />
            </div>
        )
    }
};

export default Home;