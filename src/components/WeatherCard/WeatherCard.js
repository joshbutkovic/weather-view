import React from 'react';
import PropTypes from 'prop-types';
import './WeatherCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    capitalizeFirstLetter,
    getLatestDescriptionIndex,
    getWindDirection,
    convertKelvinToFahrenheit,
    getCurrentTime,
} from '../../utils/weatherUtil';

const WeatherCard = props => {
    const { weather } = props;

    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-48x48">
                            <FontAwesomeIcon icon="cloud-sun-rain" size="3x"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-3">{weather.name}</p>
                    </div>
                </div>
                <div className="content">
                    <p className="subtitle is-4">
                        <span className="has-text-link has-text-weight-bold is-3">
                            {convertKelvinToFahrenheit(weather.main.temp)}
                        </span>
                        &nbsp;&deg;F&nbsp;
                        {capitalizeFirstLetter(weather.weather[getLatestDescriptionIndex(weather.weather)].description)}
                    </p>
                    <p className="subtitle is-4"/>
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
                            <span className="has-text-primary has-text-weight-bold is-3">
                                {convertKelvinToFahrenheit(weather.main.temp_min)}
                            </span>
                            &nbsp;&deg;F&nbsp;
                        </div>
                        <div className="column">
                            <strong>High Temp</strong>
                            :&nbsp;
                            <span className="has-text-danger has-text-weight-bold is-3">
                                {convertKelvinToFahrenheit(weather.main.temp_max)}
                            </span>
                            &nbsp;&deg;F&nbsp;
                        </div>
                    </div>
                    <div className="columns">
                        <div className="column">
                            <p className="is-badge-small has-text-grey-light">{getCurrentTime()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

WeatherCard.propTypes = {
    weather: PropTypes.object.isRequired,
};

export default WeatherCard;
