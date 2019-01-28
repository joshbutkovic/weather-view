import Reactfrom 'react';
import PropTypes from 'prop-types';
import WeatherCard from '../GetWeather/WeatherCard/WeatherCard';

const CurrentWeather = (props) => {
    const { currentWeather } = this.props.weather;
    return (
        <WeatherCard weather={currentWeather}/>
    )
}

CurrentWeather.propTypes = {};

export default CurrentWeather;