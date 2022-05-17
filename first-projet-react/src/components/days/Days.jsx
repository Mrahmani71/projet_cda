
import cb from 'classnames'
import React, { useEffect, useState } from 'react'
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux'
import { getFiveDays, getFiveLocation } from '../../featurs/fiveDay/fiveDaySlice'
import LoadingMeteo from '../loading/LoadingMeteo'


import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import AnimationMeteo from '../meteo-animation/AnimationMeteo'
import "./days-style.css"
// 
export default function SeptDay({ ville }) {
	const dispatch = useDispatch()
	const getDay = new Date().toLocaleDateString().split('/').reverse();
	const [weather, setweather] = useState([])
	const { fiveDay, isLoading, isError, message, isSucces } = useSelector((state) => state.fiveDay)

	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		const location = localStorage.getItem('location')
		if (location) {
			dispatch(getFiveLocation(location))
		}
		if (!location) {
			dispatch(getFiveDays(ville))
		}
		if (isSucces) {
			let data = []
			for (var i = 0; i < 5; i++) {
				// Get Today 05/05/2022
				const nowDay = `${getDay[0]}-${getDay[1]}-${Number(getDay[2]) + i}`
				// filter API DATA BY NOW DAY
				const filterDays = fiveDay['list'].filter(item => item.dt_txt.split(' ')[0] === nowDay)
				data.push(filterDays)
			}
			setweather(data)
		}

	}, [dispatch, isError, message])


	function getMin(day) {
		let data = []
		day.forEach(i =>
			data.push(i.main.temp_min)
		)
		return Math.min(...data)
	}


	function getMax(day) {
		let data = []
		day.forEach(i =>
			data.push(i.main.temp_min)
		)
		return Math.max(...data)
	}

	console.log(weather);

	if (isLoading) {
		return <LoadingMeteo />
	}
	return (
		<Swiper
		navigation={true}
		modules={[Navigation]}
		centeredSlides={true}
		className="mySwiper"
		breakpoints= {{
			// when window width is >= 320px
			600: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			768: {
				slidesPerView: 2,
				spaceBetween: 30
			},
			// when window width is >= 640px
			992: {
				slidesPerView: 3,
				spaceBetween: 40
			}}
		}
	>
			<div>
				{weather &&
					weather.map((day, index) =>

						<SwiperSlide className='one-day' key={index}>

							{index === 0 && <h2>Aujourd’hui</h2>}
							{index === 1 && <h2>Demain</h2>}
							{index > 1 && <h2>
								{day[0].dt_txt.split(' ')[0].split('-')[2]}
								/
								{day[0].dt_txt.split(' ')[0].split('-')[1]}</h2>}
							<div className='min-max'>
								<span className='h5'><strong>Min: </strong>{getMin(day)}</span>
								<span className='h5'><strong>Max: </strong> {getMax(day)}</span>
							</div>
							<div className='day-meteo'>
								{
									day.map((item, index) =>
										<div className='hour-meteo' key={index}>
											<h3 className='h4'>{item.dt_txt.split(' ')[1].slice(0, -3)}</h3>
											<div className='hours'>
												<p className='p'>{item.main.temp}</p>
												<AnimationMeteo weather={item} />
											</div>

										</div>
									)
								}
							</div>
						</SwiperSlide>
					)
				}
			</div>
		</Swiper>
	)
}
