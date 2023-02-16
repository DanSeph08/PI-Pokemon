/** @format */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { clearDetail, getById } from '../../Redux/Actions';
import Navbar from '../Navbar/Navbar';
import './Detail.css';

const Detail = () => {
	const dispatch = useDispatch();
	const PokeDetails = useSelector((state) => state.pokeDetail);
	const { id } = useParams();
	console.log(PokeDetails);
	useEffect(() => {
		dispatch(getById(id));

		return function () {
			dispatch(clearDetail());
		};
	}, [dispatch, id]);

	return (
		<div className='Detail'>
			<Navbar />

			<h3 className='DetailTitle'>Detail Pokemon</h3>
			<p className='DetailName'>{PokeDetails.name}</p>
			<img className='DetailImg' src={PokeDetails.image} alt='Imagen Pokemon' />
			<div className='DetailProp'>
				<p>Health: {PokeDetails.life}</p>
				<p>Attack: {PokeDetails.attack}</p>
				<p>Defense: {PokeDetails.defense}</p>
				<p>Speed: {PokeDetails.speed}</p>
				<p>Height: {PokeDetails.height}</p>
				<p>Weight: {PokeDetails.weight}</p>
				<p>Types: {PokeDetails.types?.map((elem) => elem.name)}</p>
			</div>
		</div>
	);
};

export default Detail;
