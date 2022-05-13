
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AnimationMeteo from '../meteo-animation/AnimationMeteo'
import cb from 'classnames'
import "./days-style.css"
// 
export default function SeptDay({ ville }) {
	const [weather, setweather] = useState([])
	
	let data = []
	useEffect(() => {
		const fetchData = async () => {
			const getDay = new Date().toLocaleDateString().split('/').reverse();
			const result = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?appid=${import.meta.env.VITE_API}&q=${ville}&units=metric`)
			//console.log("days ",result);
			try {
				if (result.data) {
					for (var i = 0; i < 5; i++) {
						// Get Today 05/05/2022
						const nowDay = `${getDay[0]}-${getDay[1]}-${Number(getDay[2]) + i}`

						// filter API DATA BY NOW DAY
						const filterDays = result.data['list'].filter(item => item.dt_txt.split(' ')[0] === nowDay)
						data.push(filterDays)
					}
					setweather(data)
				}
			} catch (error) {
				console.log(error)
			}

		}
		fetchData()
	}, [ville])

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
		<div className={cb('days', "container")}>
			{weather &&
				weather.map((day, index) =>
					<div className='one-day' key={index}>
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
					</div>
				)

			}
		</div>
	)
}
