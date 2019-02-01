import React from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-easy-chart';
import BarChartService from '../../services/BarChartService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Forecast = ({ forecast }) => {
    const {name} = forecast.city;
    let barChartService = new BarChartService(forecast);
    return (
        <div className="container">
            <div className="columns">
                <div className="column">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                                <FontAwesomeIcon icon="cloud-sun-rain" size="3x"/>
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-3">{name}</p>
                        </div>
                    </div>
                    <BarChart
                        axes
                        colorBars
                        grid
                        axisLabels={barChartService.getAxisLabels()}
                        style={barChartService.getStyle()}
                        barWidth={20}
                        data={barChartService.getSampleData()}
                    />
                </div>
            </div>
        </div>
    );
};

Forecast.propTypes = {
    forecast: PropTypes.object.isRequired,
};

export default Forecast;
