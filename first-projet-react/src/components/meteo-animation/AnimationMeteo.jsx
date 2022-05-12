import React from 'react'
import Cloudy from "./Cloudy"
import Sunny from "./Sunny"
import Rainy from "./Rainy"
import ThunderStorm from './ThunderStorm'
import Flurries from './Flurries'

export default function AnimationMeteo({weather}) {
  return (
    <>
    {weather && weather.weather[0].main === "Clouds" && <Cloudy/>}
    {weather && weather.weather[0].main === "Clear" && <Sunny/>}
    {weather && weather.weather[0].main === "Rain" && <Rainy/>}
    {weather && weather.weather[0].main === "thunderstorm" && <ThunderStorm/>}
    {weather && weather.weather[0].main === "snow" && <Flurries/>}
    </>
  )
}
