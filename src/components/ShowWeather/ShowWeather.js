import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import { getCurrentWeatherByZip, getCurrentWeatherByCity } from '../../store/actions/weatherActions';
import WeatherCard from '../GetWeather/WeatherCard/WeatherCard';

class ShowWeather extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selectedSearchParameter: '',
            searchTitle: 'Current Weather',
            isResultVisible: false,
        };
    }

    onBackToSearchClick = () => {
        console.log('on back to search click');
        this.setState({ isResultVisible: false });
    };

    isWeatherResultEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    render() {
        const { currentWeather } = this.props.weather;

        return (
            <section className="section" onKeyPress={this.onKeyPress}>
                <div className="container">

                </div>
            </section>

        );

    }
}

const mapStateToProps = state => ({
    weather: state.weather
});

// ShowWeather.propTypes = {
//     getCurrentWeatherByZip: PropTypes.func.isRequired,
//     getCurrentWeatherByCity: PropTypes.func.isRequired,
// };

export default connect(
    mapStateToProps,
)(ShowWeather);
