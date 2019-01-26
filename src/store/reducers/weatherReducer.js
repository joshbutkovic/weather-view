import { GET_CURRENT_WEATHER } from '../actions/types';

const initialState = {
    currentWeather: {},
};

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_WEATHER:
            return {
                ...state,
                currentWeather: action.payload,
            };
        default:
            return state;
    }
}