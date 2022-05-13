import React from 'react'
import Cloudy from "./Cloudy"
import Sunny from "./Sunny"
import Rainy from "./Rainy"
import ThunderStorm from './ThunderStorm'
import Flurries from './Flurries'
import FewCloudy from './FewCloudy'

export default function AnimationMeteo({weather}) {
  console.log(weather)
  let date = new Date(weather.dt * 1000).toLocaleString().split(' ')[1].split(':')[0]
  if(date[0] == 0) {
    date = date[1]
  }

  return (
    <>
    {/* DAY */}
    {weather.weather[0].icon === "01d" && <Sunny/>}
    {weather.weather[0].icon === "02d" && <FewCloudy/>}
    {weather.weather[0].icon === "03d" && <Cloudy/>}
    {weather.weather[0].icon === "04d" && <Cloudy/>}
    {weather.weather[0].icon === "09d" && <Rainy/>}
    {weather.weather[0].icon === "10d" && <Rainy/>}
    {weather.weather[0].icon === "11d" && <ThunderStorm/>}
    {weather.weather[0].icon === "13d" && <Flurries/>}
    {weather.weather[0].icon === "50d" && <Sunny/>}

    {/* Nuit */}
    {weather.weather[0].icon === "01n" && <Sunny/>}  {/* * */}
    {weather.weather[0].icon === "02n" && <FewCloudy/>} {/* * */}
    {weather.weather[0].icon === "03n" && <Cloudy/>}
    {weather.weather[0].icon === "04n" && <Cloudy/>}
    {weather.weather[0].icon === "09n" && <Rainy/>}
    {weather.weather[0].icon === "10n" && <Rainy/>} {/* * */}
    {weather.weather[0].icon === "11n" && <ThunderStorm/>}
    {weather.weather[0].icon === "13n" && <Flurries/>}
    {weather.weather[0].icon === "50n" && <Sunny/>}
    </> 
    
  )

}
