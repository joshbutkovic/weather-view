import { API_KEY } from './apiKey';

const VERSION = '2.5';
const CURRENT_WEATHER_API_NAME = 'weather';
const FORECAST_API_NAME = 'forecast';
const BASE_URL = 'https://api.openweathermap.org/data';

export const getCurrentWeatherByZipUrl = (zip) => {
    return `${BASE_URL}/${VERSION}/${CURRENT_WEATHER_API_NAME}?zip=${zip}&appid=${API_KEY}`;
};

export const getCurrentWeatherByCityUrl = (city) => {
    return `${BASE_URL}/${VERSION}/${CURRENT_WEATHER_API_NAME}?q=${city}&appid=${API_KEY}`;
};

export const getForecastByZipUrl = (zip) => {
    return `${BASE_URL}/${VERSION}/${FORECAST_API_NAME}?zip=${zip}&appid=${API_KEY}`;
};

export const getForecastByCityUrl = (city) => {
    return `${BASE_URL}/${VERSION}/${FORECAST_API_NAME}?q=${city}&appid=${API_KEY}`;
};