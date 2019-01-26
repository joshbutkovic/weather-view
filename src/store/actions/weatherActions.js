import axios from 'axios';
import { GET_CURRENT_WEATHER_BY_ZIP } from './types';
import { getCurrentWeatherByZipUrl } from '../../configuration/apiConfig';

export const getCurrentWeatherByZip = (zip) => async dispatch => {
    const res = await axios.get(getCurrentWeatherByZipUrl(zip));
    dispatch({
        type: GET_CURRENT_WEATHER_BY_ZIP,
        payload: res.data,
    });
};