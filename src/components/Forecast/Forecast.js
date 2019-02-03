import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Forecast.scss';
import { BarChart } from 'react-easy-chart';
import { ForecastFilter } from '../../utils/weatherUtil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactResizeDetector from 'react-resize-detector';

class Forecast extends Component {
    render() {
        const { name } = this.props.forecast.city;
        return (
            <ReactResizeDetector
                handleWidth
                handleHeight
                render={({ width }) => (
                    <div className="column">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <FontAwesomeIcon icon="cloud-sun-rain" size="3x" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-3">{name}</p>
                                <p className="subtitle">24 Hour Forecast</p>
                            </div>
                        </div>
                        <BarChart
                            colorBars
                            grid
                            yAxisOrientRight
                            axes={width > 530}
                            axisLabels={{ x: 'Time', y: 'Temp Fahrenheit' }}
                            width={width}
                            height={500}
                            data={ForecastFilter.init(this.props.forecast.list)}
                        />
                    </div>
                )}
            />
        );
    }
}

Forecast.propTypes = {
    forecast: PropTypes.object.isRequired,
};

export default Forecast;
