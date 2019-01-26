import { GET_CURRENT_WEATHER_BY_ZIP } from '../actions/types';

const initialState = {
    currentWeather: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER_BY_ZIP:
            return {
                ...state,
                currentWeather: action.payload,
            };
        default:
            return state;
    }
}