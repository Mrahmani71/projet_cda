
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AnimationMeteo from '../meteo-animation/AnimationMeteo'
import "./days-style.css"

// 
export default function SeptDay() {
	const [weather, setweather] = useState([])
	let data = []
	const { fiveDay, isLoading, isError, message } = useSelector((state) => state.fiveDay)
	const dispatch = useDispatch()
	const getDay = new Date().toLocaleDateString('fr-FR').split('/').reverse()

	useEffect(() => {
		if (isError) {
			console.log(message);
		}
		setweather(data)
	}, [dispatch, isError, message, fiveDay])


	if (isLoading || !fiveDay) {
		return <div>LOADING.....</div>
	}

	if(fiveDay && fiveDay.list.length > 0) {
		
		for (var i = 0; i < 5; i++) {
			// Get Today 05/05/2022
			const nowDay = `${getDay[0]}-${getDay[1]}-${Number(getDay[2]) + i}`
			// filter API DATA BY NOW DAY
			// const filterDays = fiveDay['list'].filter(item => item["dt_txt"].slice(0,10) === nowDay)
			const filterDays = fiveDay['list'].filter(function (item) {
				return item["dt_txt"].slice(0, 10) === nowDay;
			});
			data.push(filterDays)
			
		}
		
	}

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

	return (
		<Swiper
			navigation={true}
			modules={[Navigation]}
			centeredSlides={true}
			className="mySwiper"
			initialSlide={0}
			breakpoints={{
				// when window width is >= 320px
				600: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				768: {
					initialSlide: 1,
					slidesPerView: 2,
					spaceBetween: 30
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 3,
					spaceBetween: 40
				}
			}
			}
		>
			<div>
				{
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
