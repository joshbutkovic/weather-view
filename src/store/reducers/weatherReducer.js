import { GET_CURRENT_WEATHER_BY_CITY, GET_CURRENT_WEATHER_BY_ZIP } from '../actions/types';

const initialState = {
    forecast: [],
    currentWeather: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER_BY_ZIP:
            return {
                ...state,
                currentWeather: action.payload,
            };
        case GET_CURRENT_WEATHER_BY_CITY:
            return {
                ...state,
                currentWeather: action.payload,
            };
        default:
            return state;
    }
}
