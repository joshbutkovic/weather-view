import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import posed from 'react-pose';
import { connect } from 'react-redux';
import { getCurrentWeatherByZip, getCurrentWeatherByCity } from '../../store/actions/weatherActions';
import { zipRegex, cityRegex } from '../../configuration/regex';
import SearchBar from './SearchBar/SearchBar';
import GetWeatherButton from './GetWeatherButton';
import WeatherCard from './WeatherCard/WeatherCard';

// Pose Animations
const WeatherCardAnimation = posed.div({
    hidden: { y: -10, x: 10, opacity: 0, transition: { duration: 200 } },
    visible: { y: 0, x: 0, opacity: 1, transition: { duration: 200 } },
});

class GetWeather extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selectedSearchParameter: '',
            searchTitle: 'Current Weather',
            isResultVisible: false,
        };
    }

    onSearchTermChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    checkForValidSearchCity = searchTerm => {
        return cityRegex.test(searchTerm);
    };

    checkForValidSearchZip = searchTerm => {
        return zipRegex.test(searchTerm);
    };

    onKeyPress = e => {
        if (e.key === 'Enter') {
            this.getWeather();
        }
    };

    getWeather = () => {
        if (this.checkForValidSearchCity(this.state.searchTerm)) {
            this.props.getCurrentWeatherByCity(this.state.searchTerm);
        } else if (this.checkForValidSearchZip(this.state.searchTerm)) {
            this.props.getCurrentWeatherByZip(this.state.searchTerm);
        } else {
            alert('handle ERROR: invalid search term');
        }
    };

    onClick = () => {
        if (this.state.searchTerm.length > 2) {
            this.getWeather();
        } else {
            alert('Must be at least 3 characters');
        }
    };

    render() {
        const { currentWeather } = this.props.weather;
        let _isResultVisible = this.state.isResultVisible;
        if (typeof currentWeather.name !== 'undefined') {
            _isResultVisible = true;
        }

        return (
                <section className="section" onKeyPress={this.onKeyPress}>
                    <div className="container">
                        {!_isResultVisible && (
                            <React.Fragment>
                                <section className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <h1 className="is-size-3">{this.state.searchTitle}</h1>
                                        <p className="attribution">
                                            Powered by{' '}
                                            <a href={'https://openweathermap.org'}>https://openweathermap.org</a>
                                        </p>
                                    </div>
                                </section>
                                <section className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <SearchBar
                                            name="searchTerm"
                                            value={this.state.searchTerm}
                                            onChange={this.onSearchTermChange}
                                        />
                                    </div>
                                </section>
                                <section className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <GetWeatherButton onClick={this.onClick} />
                                    </div>
                                </section>
                            </React.Fragment>
                        )}

                        {_isResultVisible && (
                            <section className="columns">
                                <div className="column is-10-mobile is-offset-1-mobile column is-8 is-offset-2">
                                    <button
                                        className="button is-small is-link"
                                        onClick={() => _isResultVisible = false}
                                    >
                                        Back to Search
                                    </button>
                                    <WeatherCardAnimation
                                        key="animation"
                                        className="animation"
                                        pose={_isResultVisible ? 'visible' : 'hidden'}
                                    >
                                        <WeatherCard weather={currentWeather} />
                                    </WeatherCardAnimation>
                                </div>
                            </section>
                            )}

                    </div>
                </section>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
    weather: state.weather,
});

GetWeather.propTypes = {
    getCurrentWeatherByZip: PropTypes.func.isRequired,
    getCurrentWeatherByCity: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    { getCurrentWeatherByZip, getCurrentWeatherByCity },
)(GetWeather);
