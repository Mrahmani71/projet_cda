import axios from "axios";

const getWeatherToday = async(ville) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&appid=${import.meta.env.VITE_API}`)
    return response.data
}

const getWeatherLocation = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${JSON.parse(location).lat}&lon=${JSON.parse(location).lon}&units=metric&appid=${import.meta.env.VITE_API}`)
    return response.data
}

const todayService = {
    getWeatherToday,
    getWeatherLocation
}

export default todayService