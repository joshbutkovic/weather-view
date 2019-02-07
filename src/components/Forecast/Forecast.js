import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Forecast.scss';
import { BarChart } from 'react-easy-chart';
import { ForecastFilter, getTempRange } from '../../utils/weatherUtil';
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
                    <React.Fragment>
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
                        <div className="bar-chart-wrapper">
                            <BarChart
                                colorBars
                                grid
                                yAxisOrientRight
                                axes={width > 530}
                                axisLabels={{ x: 'Time', y: 'Temp Fahrenheit' }}
                                width={width}
                                height={480}
                                data={ForecastFilter.init(this.props.forecast.list)}
                            />
                            <div className="is-hidden-tablet is-mobile columns">
                                <div className="column is-half-mobile">
                                    <label className="is-size-5">Low:</label>&nbsp;
                                    <span className="is-size-5 has-text-info has-text-weight-bold">
                                        {getTempRange(this.props.forecast.list).lowTemp}&nbsp;F
                                    </span>
                                </div>
                                <div className="column is-half-mobile">
                                    <label className="is-size-5">High:</label>&nbsp;
                                        <span className="is-size-5 has-text-danger has-text-weight-bold">
                                            {getTempRange(this.props.forecast.list).highTemp}&nbsp;F
                                        </span>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                )}
            />
        );
    }
}

Forecast.propTypes = {
    forecast: PropTypes.object.isRequired,
};

export default Forecast;
