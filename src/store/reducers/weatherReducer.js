import {
    GET_CURRENT_WEATHER_BY_CITY,
    GET_CURRENT_WEATHER_BY_ZIP,
    CLEAR_WEATHER,
    GET_FORECAST_BY_ZIP,
    GET_FORECAST_BY_CITY,
} from '../actions/types';

const initialState = {
    forecast: {},
    currentWeather: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER_BY_ZIP || GET_CURRENT_WEATHER_BY_CITY:
            return {
                ...state,
                currentWeather: action.payload,
            };
        case CLEAR_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
                forecast: []
            };
        case GET_FORECAST_BY_ZIP || GET_FORECAST_BY_CITY:
            return {
                ...state,
                forecast: action.payload,
            };
        default:
            return state;
    }
}
