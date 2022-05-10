
import axios from 'axios'
import React, { useEffect, useState } from 'react'


// 
export default function SeptDay() {
	let data = []
	const [api, setApi] = useState(`https://api.openweathermap.org/data/2.5/forecast?appid=0ff1f1d3219100085377002952db296f&q=le mans`)
	const [weather, setweather] = useState([])

	const getWeather = (api) => {
		axios
			.get(api)
			.then((res, err) => {
				//console.log('data sept', res.data)
				if (err) console.log('err', err)
				setweather(res.data)
			})
	}
	
	useEffect(() => {
		getWeather(api)
		const getDay = new Date().toLocaleDateString().split('/').reverse();
		
		if(weather.list) {
			for(var i = 0; i < 5; i++ ) {
				const nowDay = `${getDay[0]}-${getDay[1]}-${Number(getDay[2]) + i}`
				const filterDays = weather['list'].filter(item => item.dt_txt.split(' ')[0] === nowDay)
				data.push(filterDays)
			}
		}
	
	}, [])

	console.log(data)

	return (
		<>hello</>
		// <pre>{weather}</pre>
	)
}
