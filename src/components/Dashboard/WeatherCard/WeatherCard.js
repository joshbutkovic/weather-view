import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './WeatherCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BarChart, PieChart } from 'react-easy-chart';

const WeatherCard = props => {
    const { weather } = props;

    const convertKelvinToFahrenheit = kelvinTemp => {
        return parseInt(1.8 * (kelvinTemp - 273) + 32);
    };

    const capitalizeFirstLetter = description => {
        return description.charAt(0).toUpperCase() + description.slice(1);
    };

    const getCurrentTime = () => {
        return moment().format('h:mmA');
    };

    const getWindDirection = angle => {
        let segments = 8;
        let degree = 360 / segments;
        angle = angle + degree / 2;

        if (angle >= 0 && angle < degree) {
            return 'N';
        } else if (angle >= degree && angle < 2 * degree) {
            return 'NE';
        } else if (angle >= 2 * degree && angle < 3 * degree) {
            return 'E';
        } else if (angle >= 3 * degree && angle < 4 * degree) {
            return 'SE';
        } else if (angle >= 4 * degree && angle < 5 * degree) {
            return 'S';
        } else if (angle >= 5 * degree && angle < 6 * degree) {
            return 'SW';
        } else if (angle >= 6 * degree && angle < 7 * degree) {
            return 'W';
        } else if (angle >= 7 * degree && angle < 8 * degree) {
            return 'NW';
        } else {
            return 'N';
        }
    };

    const getLatestDescriptionIndex = weather => {
        let lastIndex = Object.keys(weather)[Object.keys(weather).length - 1];
        return parseInt(lastIndex);
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <FontAwesomeIcon icon="cloud-sun-rain" size="3x" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-3">
                            {weather.name}
                        </p>
                    </div>
                </div>

                <div className="content">
                    <p className="subtitle is-4">
                        <span className="has-text-link has-text-weight-bold is-3">{convertKelvinToFahrenheit(weather.main.temp)}</span>
                        &nbsp;&deg;F&nbsp;
                        {capitalizeFirstLetter(weather.weather[getLatestDescriptionIndex(weather.weather)].description)}
                    </p>
                    <p className="subtitle is-4" />
                    <div className="columns">
                        <div className="column">
                            <p className="subtitle is-6">
                                <strong>Wind</strong>: {weather.wind.speed}
                                &nbsp; MPH&nbsp;
                                {getWindDirection(parseFloat(weather.wind.deg))}
                            </p>
                        </div>
                        <div className="column">
                            <p className="subtitle is-6">
                                <strong>Humidity</strong>
                                :&nbsp;
                                {weather.main.humidity}
                                &#37;
                            </p>
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <strong>Low Temp</strong>
                            :&nbsp;
                            <span className="has-text-primary has-text-weight-bold is-3">{convertKelvinToFahrenheit(weather.main.temp_min)}</span>
                            &nbsp;&deg;F&nbsp;
                        </div>
                        <div className="column">
                        <strong>High Temp</strong>
                        :&nbsp;
                        <span className="has-text-danger has-text-weight-bold is-3">{convertKelvinToFahrenheit(weather.main.temp_max)}</span>
                        &nbsp;&deg;F&nbsp;
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

// WeatherCard.propTypes = {};

export default WeatherCard;
