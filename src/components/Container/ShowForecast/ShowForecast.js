import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, GetWeatherAnimation } from '../../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Forecast from '../../Forecast/Forecast';

class ShowForecast extends Component {

    isWeatherResultEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    onKeyPress = e => {
        if (e.key === 'Enter') {
            this.props.history.push('/');
        }
    };

    onBackToSearchClick = () => {
        this.props.history.push('/');
    };

    render() {
        const { forecast } = this.props.weather;
        return (
            <GetWeatherAnimation key="search" className="search" initialPose="hidden" pose="visible">
                <div className="container" onKeyPress={this.onKeyPress}>
                    <Button className="button is-small is-link" onClick={this.onBackToSearchClick}>
                        <FontAwesomeIcon icon="arrow-left" />
                        &nbsp; Back to Search
                    </Button>
                    <Forecast forecast={forecast} />
                </div>
            </GetWeatherAnimation>
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

export default connect(
    mapStateToProps,
    {},
)(ShowForecast);
