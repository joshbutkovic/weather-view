import axios from 'axios';
import { GET_CURRENT_WEATHER_BY_ZIP, GET_CURRENT_WEATHER_BY_CITY, DELETE_CURRENT_WEATHER } from './types';
import { getCurrentWeatherByCityUrl, getCurrentWeatherByZipUrl } from '../../configuration/apiConfig';

export const getCurrentWeatherByZip = (zip, history) => async dispatch => {
    const res = await axios.get(getCurrentWeatherByZipUrl(zip));
    // history.push('/show');
    dispatch({
        type: GET_CURRENT_WEATHER_BY_ZIP,
        payload: res.data,
    });
};

export const getCurrentWeatherByCity = (city, history) => async dispatch => {
    const res = await axios.get(getCurrentWeatherByCityUrl(city));
    // history.push('/show');
    dispatch({
        type: GET_CURRENT_WEATHER_BY_CITY,
        payload: res.data,
    });
};

export const deleteCurrentWeather = () => async dispatch => {
        dispatch({
            type: DELETE_CURRENT_WEATHER,
            payload: {},
        });
};
