// Modules
import { useEffect, useState } from "react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Components
import Search from "./components/search/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import LonLat from "./components/lon-lat/LonLat"
import SeptDay from "./components/days/Days"
import Wind from "./components/wind/Wind"
import ToggleTheme from "./components/toggle-theme/ToggleTheme"
import ErrorNotif from "./components/notifications/ErrorNotif"

// redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherLocation, getWeatherToday } from "./featurs/today/todaySlice";


// Styles
import "./assets/styles/main.css"


export default function App() {
  const villeStorage = localStorage.getItem('ville')
  const dispatch = useDispatch()
  const { today, isLoading, isError, message } = useSelector(
    (state) => state.today
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }
    
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((result) => {
        if(result) {
          const letLon = {
            lat : result.coords.latitude,
            lon: result.coords.longitude,
          }
          localStorage.setItem('location', JSON.stringify(letLon))
          return dispatch(getWeatherLocation(letLon))
        } 
      })
    } else if (villeStorage) {
      localStorage.removeItem('location')
      dispatch(getWeatherToday(villeStorage))
    } else if (!villeStorage) {
      localStorage.removeItem('location')
      dispatch(getWeatherToday("Le Mans"))
      localStorage.setItem('ville', "Le Mans")
    }

  }, [dispatch, isError, message])

  const search = async (searchValue) => {
    if (!searchValue) {
      return ErrorNotif("input is empty")
    }

    if (!villeStorage || searchValue.toLowerCase() !== today.name.toLowerCase()) {
      localStorage.removeItem('location')
      localStorage.setItem('ville', searchValue)
      dispatch(getWeatherToday(searchValue))
    } else {
      return ErrorNotif("invalid Error")
    }
  }

  if (isLoading) {
    return <div>LOADING....</div>
  }
  // https://openweathermap.org/current
  return (
    <main className="main">
      <ToastContainer />
      {
        today.name &&
        <>
          <ToggleTheme />
          <Search search={search} />
          <h1 className="h1">{today.name}</h1>
          <h2 className="h2">{today.main.temp}</h2>
          <AnimationMeteo weather={today} />

          <div className="details">
            <LonLat weather={today} />
            <Wind weather={today} />
          </div>
          <h3 className="h3">Les Jours Suivants</h3>
          <SeptDay ville={villeStorage} />
        </>
      }

    </main>
  )
} 
