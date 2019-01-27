import axios from 'axios';
import { GET_CURRENT_WEATHER_BY_ZIP, GET_CURRENT_WEATHER_BY_CITY } from './types';
import { getCurrentWeatherByCityUrl, getCurrentWeatherByZipUrl } from '../../configuration/apiConfig';

export const getCurrentWeatherByZip = (zip) => async dispatch => {
    const res = await axios.get(getCurrentWeatherByZipUrl(zip));
    dispatch({
        type: GET_CURRENT_WEATHER_BY_ZIP,
        payload: res.data,
    });
};

export const getCurrentWeatherByCity = (city) => async dispatch => {
    const res = await axios.get(getCurrentWeatherByCityUrl(city));
    dispatch({
        type: GET_CURRENT_WEATHER_BY_CITY,
        payload: res.data,
    });
};