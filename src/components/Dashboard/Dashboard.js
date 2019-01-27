import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { connect } from 'react-redux';
import { getCurrentWeatherByZip, getCurrentWeatherByCity } from '../../store/actions/weatherActions';
import { zipRegex, cityRegex } from '../../configuration/regex';
import SearchBar from './SearchBar/SearchBar';
import GetWeatherButton from './GetWeatherButton';
import WeatherCard from './WeatherCard/WeatherCard';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selectedSearchParameter: '',
            searchTitle: "Current Weather",
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
            console.log('calling city');
            this.props.getCurrentWeatherByCity(this.state.searchTerm);
        } else if (this.checkForValidSearchZip(this.state.searchTerm)) {
            this.props.getCurrentWeatherByZip(this.state.searchTerm);
        } else {
            alert('handle ERROR: invalid search term');
        }
    };

    onClick = () => {
        this.getWeather();
    };

    render() {
        const { currentWeather } = this.props.weather;

        return (
            <React.Fragment>
                <section className="section" onKeyPress={this.onKeyPress}>
                    <div className="container">
                        <section className="columns">
                            <div className="column is-10-mobile is-offset-1-mobile is-6 is-offset-3">
                                <h1 className="is-size-3">{this.state.searchTitle}</h1>
                                <p className="attribution">
                                    Powered by <a href={'https://openweathermap.org'}>https://openweathermap.org</a>
                                </p>
                            </div>
                        </section>
                        <section className="columns">
                            <div className="column is-10-mobile is-offset-1-mobile is-6 is-offset-3">
                                <SearchBar
                                    name="searchTerm"
                                    value={this.state.searchTerm}
                                    onChange={this.onSearchTermChange}
                                />
                            </div>
                        </section>
                        <section className="columns">
                            <div className="column is-10-mobile is-offset-1-mobile is-6 is-offset-3">
                                <GetWeatherButton onClick={this.onClick} />
                            </div>
                        </section>
                        {typeof currentWeather.name !== 'undefined' ? (
                            <section className="columns">
                                <div className="column is-10-mobile is-offset-1-mobile column is-6 is-offset-3">
                                    <WeatherCard weather={currentWeather} />
                                </div>
                            </section>
                        ) : null}
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
    weather: state.weather,
});

Dashboard.propTypes = {
    getCurrentWeatherByZip: PropTypes.func.isRequired,
    getCurrentWeatherByCity: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    { getCurrentWeatherByZip, getCurrentWeatherByCity },
)(Dashboard);
