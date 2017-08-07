import axios from 'axios'
export const FETCH_WEATHER = 'FETCH_WEATHER'
const API_KEY = 'bd40b1d192166782c248d15e040bec37'
const API_STATE = 'us'
const ROOT_URL ='http://api.openweathermap.org/data/2.5/weather?q='


export function fetchWeather(city){
  const request = axios.get(`${ROOT_URL}${city},${API_STATE}&appid=${API_KEY}`)
  return {
    type: FETCH_WEATHER,
    payload:request
  }
}
