import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './ShowForecast.scss';
import { Button, GetForecastAnimation } from '../../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isWeatherResultEmpty } from '../../../utils/weatherUtil';
import Forecast from '../../Forecast/Forecast';

class ShowForecast extends Component {
    componentDidMount() {
        const { forecast } = this.props.weather;
        if (isWeatherResultEmpty(forecast)) {
            this.props.history.push('/');
        }
    }

    onBackToSearchClick = () => {
        this.props.history.push('/weather-view');
    };

    render() {
        const { forecast } = this.props.weather;
        const isForecastEmpty = isWeatherResultEmpty(forecast);

        return (
            <React.Fragment>
                {!isForecastEmpty && (
                    <GetForecastAnimation key="forecast" className="forecast" initialPose="hidden" pose="visible">
                        <div className="container">
                            <section className="section">
                                <Button className="button is-small is-link" onClick={this.onBackToSearchClick}>
                                    <FontAwesomeIcon icon="arrow-left" />
                                    &nbsp; Back to Search
                                </Button>
                                <Forecast forecast={forecast} />
                            </section>
                        </div>
                    </GetForecastAnimation>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    error: state.error,
});

ShowForecast.propTypes = {
    weather: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(ShowForecast);
