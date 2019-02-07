import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, GetWeatherAnimation } from '../../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isWeatherResultEmpty } from '../../../utils/weatherUtil';
import WeatherCard from '../../WeatherCard/WeatherCard';

class ShowCurrentWeather extends Component {

    componentDidMount() {
        const { currentWeather } = this.props.weather;
        if (isWeatherResultEmpty(currentWeather)) {
            this.props.history.push('/');
        }
    }

    onKeyPress = e => {
        if (e.key === 'Enter') {
            this.props.history.push('/');
        }
    };

    onBackToSearchClick = () => {
        this.props.history.push('/');
    };

    render() {
        const { currentWeather } = this.props.weather;
        const currentWeatherEmpty = isWeatherResultEmpty(currentWeather);

        return (
            <React.Fragment>
                {!currentWeatherEmpty && (
                    <GetWeatherAnimation key="search" className="search" initialPose="hidden" pose="visible">
                        <div className="container" onKeyPress={this.onKeyPress}>
                            <section className="section">
                                <Button className="button is-small is-link" onClick={this.onBackToSearchClick}>
                                    <FontAwesomeIcon icon="arrow-left" />
                                    &nbsp;Back to Search
                                </Button>
                                <WeatherCard weather={currentWeather} />
                            </section>
                        </div>
                    </GetWeatherAnimation>
                )}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    weather: state.weather,
    error: state.error,
});

ShowCurrentWeather.propTypes = {
    weather: PropTypes.object.isRequired,
};

export default connect(
    mapStateToProps,
    {},
)(ShowCurrentWeather);
