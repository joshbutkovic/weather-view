import axios from 'axios';
import {
    GET_CURRENT_WEATHER_BY_ZIP,
    GET_CURRENT_WEATHER_BY_CITY,
    GET_FORECAST_BY_CITY,
    GET_FORECAST_BY_ZIP,
    CLEAR_WEATHER,
    SET_ERROR,
    CLEAR_ERROR,
} from './types';
import {
    getCurrentWeatherByCityUrl,
    getCurrentWeatherByZipUrl,
    getForecastByCityUrl,
    getForecastByZipUrl,
} from '../../config/apiConfig';

export const getCurrentWeatherByZip = (zip) => async dispatch => {
    try {
        const res = await axios.get(getCurrentWeatherByZipUrl(zip));
        dispatch({
            type: GET_CURRENT_WEATHER_BY_ZIP,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: 'No location found for that zip',
        });
    }
};

export const getCurrentWeatherByCity = (city) => async dispatch => {
    try {
        const res = await axios.get(getCurrentWeatherByCityUrl(city));
        dispatch({
            type: GET_CURRENT_WEATHER_BY_CITY,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: 'No location found for that city',
        });
    }
};

export const clearWeather = () => async dispatch => {
    dispatch({
        type: CLEAR_WEATHER,
        payload: {},
    });
};

export const getForecastByZip = (zip) => async dispatch => {
    try {
        const res = await axios.get(getForecastByZipUrl(zip));
        dispatch({
            type: GET_FORECAST_BY_ZIP,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SET_ERROR,
            payload: 'No location found for that zip',
        });
    }
};

export const getForecastByCity = (city) => async dispatch => {
    const res = await axios.get(getForecastByCityUrl(city));
    dispatch({
        type: GET_FORECAST_BY_CITY,
        payload: res.data,
    });
};

export const setError = (error) => async dispatch => {
    dispatch({
        type: SET_ERROR,
        payload: error,
    });
};

export const clearError = () => async dispatch => {
    dispatch({
        type: CLEAR_ERROR,
        payload: {},
    });
};
