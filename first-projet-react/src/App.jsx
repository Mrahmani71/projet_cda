// Modules
import { useEffect, useState } from "react"
import { ToastContainer } from 'react-toastify';
import cb from "classnames"
import 'react-toastify/dist/ReactToastify.css';

// // Components
import Search from "./components/search/Search"
import AnimationMeteo from "./components/meteo-animation/AnimationMeteo"
import LonLat from "./components/lon-lat/LonLat"
import SeptDay from "./components/days/Days"
import Wind from "./components/wind/Wind"
import ToggleTheme from "./components/toggle-theme/ToggleTheme"
import ErrorNotif from "./components/notifications/ErrorNotif"

// // redux
import { useDispatch, useSelector } from "react-redux";
import { getWeatherLocation, getWeatherToday } from "./featurs/today/todaySlice";


// // Styles
import "./assets/styles/main.css"
import LoadingMeteo from "./components/loading/LoadingMeteo";
import { reset } from "./featurs/fiveDay/fiveDaySlice";




export default function App() {

  const dispatch = useDispatch()
  const cherchePar = localStorage.getItem('cherchePar')
  const ville = localStorage.getItem('ville')
  const location = localStorage.getItem('location')
  const { today, isLoading, isError, message } = useSelector(
    (state) => state.today
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (location && cherchePar && cherchePar === "location") {
      localStorage.removeItem('ville')
      dispatch(getWeatherLocation(location))
    }

    else if (ville && cherchePar && cherchePar === "ville") {
      localStorage.removeItem('location')
      dispatch(getWeatherToday(ville))
    }
    else if (!ville) {
      navigator.geolocation.getCurrentPosition(result => {
        if (result) {
          const letLon = {
            lat: result.coords.latitude,
            lon: result.coords.longitude,
          }
          localStorage.setItem('location', JSON.stringify(letLon))
          localStorage.setItem('cherchePar', "location")
          localStorage.removeItem('ville')
        }
      })
      navigator.permissions.query({ name: 'geolocation' }).then(permission => {
        if (permission.state === "granted") {
          return dispatch(getWeatherLocation(location))
        }
        else {
          if (ville) {
            localStorage.removeItem('location')
            localStorage.setItem('cherchePar', "ville")
            return dispatch(getWeatherToday(ville))
          } else {
            localStorage.removeItem('location')
            localStorage.setItem('cherchePar', "ville")
            localStorage.setItem('ville', "Le Mans")
            return dispatch(getWeatherToday("Le Mans"))
          }
        }
      })
    }


  }, [dispatch, isError, message])

  const search = async (searchValue) => {
    if (!searchValue) {
      return ErrorNotif("input is empty")
    }

    if (!ville || searchValue.toLowerCase() !== today.name.toLowerCase()) {
      localStorage.removeItem('location')
      localStorage.setItem('cherchePar', "ville")
      localStorage.setItem('ville', searchValue)
      dispatch(getWeatherToday(searchValue))
    } else {
      return ErrorNotif("invalid Error")
    }
  }

  if (isLoading) {
    return <div>HELLO</div>
    //return <LoadingMeteo/>
  }
  //   // https://openweathermap.org/current
  return (
    <main className={cb("main", "container")}>
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
          <SeptDay ville={ville} />
        </>
      }

    </main>
  )
} 
