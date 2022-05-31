
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import moment from "moment"
import AnimationMeteo from '../meteo-animation/AnimationMeteo'
import "./days-style.css"

// Main function
export default function CinqDays() {
	const [weather, setweather] = useState([])
	const [width, setWidth] = useState()
	const { fiveDay, isLoading, isError, message } = useSelector((state) => state.fiveDay)


	useEffect(() => {
		if (isError) {
			console.log(message);
		}

		if (window.innerWidth < 768) {
			setWidth(0)
		} else {
			setWidth(1)
		}


		let data = []
		for (var i = 0; i < 5; i++) {
			// Get Today 05/05/2022
			const day = moment().add(i, 'days').format('YYYY-MM-DD');
			// filter API DATA BY NOW DAY
			const filterDays = fiveDay.list.filter(item => {
				return item.dt_txt.slice(0, 10) === day;
			});
			data.push(filterDays)
		}
		setweather(data)

	}, [isError, message,fiveDay])

	if (isLoading || !fiveDay) {
		return <div>LOADING.....</div>
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
			initialSlide={width}
			breakpoints={{
				// when window width is >= 320px
				600: {
					slidesPerView: 1,
					spaceBetween: 20
				},
				// when window width is >= 480px
				768: {
					slidesPerView: 3,
					spaceBetween: 10
				},
				// when window width is >= 640px
				992: {
					slidesPerView: 3,
					spaceBetween: 30
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
