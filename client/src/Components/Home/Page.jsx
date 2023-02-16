import React from "react";
import '../Home/Css/Page.css';

const Page = ({ pokemons, pokeXPage, page }) => {
    const pageNumber = [];

    for (let i = 0; i < Math.ceil(pokemons / pokeXPage); i++){
        pageNumber.push(i + 1);
    };

    return (
        <div className="Contain">
            <ul className="List">
                {pageNumber.map(num => {
                    return (
                        <li className="Item" key={num}>
                            <button className="Num" href='link-page' onClick={() => page(num)}> {num} </button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
};

export default Page;