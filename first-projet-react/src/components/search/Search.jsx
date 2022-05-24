import React, { useState } from 'react'
import cb from "classnames"

import "./search-style.css"
import { useDispatch } from 'react-redux';
import { getWeatherLocation, getWeatherToday } from '../../featurs/today/todaySlice';
import { getFiveDays, getFiveLocation } from '../../featurs/fiveDay/fiveDaySlice';


export default function Search({ search }) {
	const ville = localStorage.getItem("city")
	const dispatch = useDispatch()
	const [nameVille, setNameVille] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		search(nameVille)
	}

	function handlePosition() {

		function getLongAndLat() {
			return new Promise((resolve, reject) =>
				navigator.geolocation.getCurrentPosition(resolve, reject)
			);
		}

		const locateButtonFetch = async () => {
			try {
				let position = await getLongAndLat(),
					{ coords } = position;
				console.log(coords);
				dispatch(getWeatherLocation(coords))
				dispatch(getFiveLocation(coords))
				localStorage.removeItem('city')
			} catch (e) {
				console.log('Error: ' + e.message);
				if (ville) {
					dispatch(getWeatherToday(ville))
					dispatch(getFiveDays(ville))
				} else {
					dispatch(getWeatherToday("Le Mans"))
					dispatch(getFiveDays("Le Mans"))
				}
			}
		}
		locateButtonFetch()
	}

	return (
		<div className={cb('searchBar', 'container')}>
			<div onClick={handlePosition}>
				<svg xmlns="http://www.w3.org/2000/svg" className="locationSearch" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
					<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
				</svg>
			</div>
			<form className='search__form' onSubmit={handleSubmit}>
				<input className='search__input' placeholder='search' type="text" value={nameVille}
					onChange={(e) => setNameVille(e.target.value)} />
				<button className={cb('search__button', "button")} type='submit'>Search</button>
			</form>
		</div>
	)
}

