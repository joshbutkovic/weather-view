import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart } from 'react-easy-chart';
import BarChartService from '../../services/BarChartService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactResizeDetector from 'react-resize-detector';

class Forecast extends Component {
    render() {
        const { name } = this.props.forecast.city;
        let barChartService = new BarChartService(this.props.forecast);
        return (
            <div className="container">
                <div className="columns">
                    <ReactResizeDetector
                        handleWidth
                        handleHeight
                        render={({ width }) => (
                            <div className="column" ref={this.graphContainer}>
                                <div className="media">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <FontAwesomeIcon icon="cloud-sun-rain" size="3x" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-3">{name}</p>
                                    </div>
                                </div>
                                <BarChart
                                    colorBars
                                    grid
                                    axes={width > 530}
                                    axisLabels={barChartService.getAxisLabels()}
                                    margin={{top: 20, right: 20, bottom: 20, left: 0}}
                                    style={barChartService.getStyle()}
                                    width={width}
                                    height={500}
                                    data={barChartService.filterForecastData()}
                                />
                            </div>
                        )}
                    />
                </div>
            </div>
        );
    }
}

Forecast.propTypes = {
    forecast: PropTypes.object.isRequired,
};

export default Forecast;
