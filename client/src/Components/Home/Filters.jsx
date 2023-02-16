import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { filterStatus, filterType, getTypes, OrderAscOrDesc } from "../../Redux/Actions";
import './Css/Filters.css';

const Filters = () => {
    const dispatch = useDispatch();
    const types = useSelector(state => state.types);

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    const handlefilters = (event) => {
        dispatch(filterStatus(event.target.value))
    };

    const handlefilterType = (event) => {
        dispatch(filterType(event.target.value))
    };

    const handleOrder = (event) => {
        dispatch(OrderAscOrDesc(event.target.value))
    };

    return (
        <div className="FilOrd">
            <p className="Tit">Order:</p>
            <select className="Select" name="FiltOrder" onChange={(event) => handleOrder(event)}>
                <option value="az">A - Z</option>
                <option value="za">Z - A</option>
                <option value="ha">High attack</option>
                <option value="la">Low attack</option>
            </select>
            <p className="Tit">Status:</p>
            <select className="Select" name="FiltStatus" onChange={(event) => handlefilters(event)}>
                <option value="All">All</option>
                <option value="Api">Api</option>
                <option value="Created">Created</option>
            </select>
            <p className="Tit">Types:</p>
            <select className="Select" name="FiltType" onChange={(event) => handlefilterType(event)}>
                <option value="All">All</option>
                {types.map((ty) => {
                    return <option value={ty.name}>{ty.name}</option>;
                })}
            </select>

        </div>
    )
};

export default Filters