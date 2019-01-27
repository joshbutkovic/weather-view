import { API_KEY } from './apiKey';

const VERSION = '2.5';
const API_NAME = 'weather';
const BASE_URL = 'https://api.openweathermap.org/data'

export const getCurrentWeatherByZipUrl = (zip) => {
    return `${BASE_URL}/${VERSION}/${API_NAME}?zip=${zip}&appid=${API_KEY}`;
}

export const getCurrentWeatherByCityUrl = (city) => {
    return `${BASE_URL}/${VERSION}/${API_NAME}?q=${city}&appid=${API_KEY}`;
}