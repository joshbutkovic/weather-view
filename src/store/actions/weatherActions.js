import axios from 'axios';
import { GET_CURRENT_WEATHER } from './types';

export const getCurrentWeather = () => async dispatch => {
    const res = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=89122&appid=d88536a028aaf9d7da1f938f02a6b6ec');
    dispatch({
        type: GET_CURRENT_WEATHER,
        payload: res.data,
    });
};