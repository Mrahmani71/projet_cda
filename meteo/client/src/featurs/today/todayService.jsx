import axios from "axios";
const API_URL = '/api/today/'
const getWeatherToday = async(ville) => {
    const response = await axios.get(API_URL + ville)
    return response.data
}


const getWeatherLocation = async (location) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&units=metric&appid=${process.env.REACT_APP_API}`)
    return response.data
}

const todayService = {
    getWeatherToday,
    getWeatherLocation
}

export default todayService