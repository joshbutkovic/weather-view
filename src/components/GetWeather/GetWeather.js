import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GetWeather.scss';
import { connect } from 'react-redux';
import {
    getCurrentWeatherByZip,
    getCurrentWeatherByCity,
    deleteCurrentWeather,
} from '../../store/actions/weatherActions';
import { zipRegex, cityRegex } from '../../configuration/regex';
import { GetWeatherAnimation, PosedSearchBar } from '../../utils/poseAnimations';
import SearchBar from './SearchBar/SearchBar';
import GetWeatherButton from './GetWeatherButton';
import WeatherCard from './WeatherCard/WeatherCard';

class GetWeather extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selectedSearchParameter: '',
            searchTitle: 'Current Weather',
            isSearchFadedIn: false,
            isSearchFocused: false,
        };
    }

    componentDidMount() {
        this.setState({ isSearchFadedIn: true });
    }

    onSearchTermChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    onBackToSearchClick = () => {
        this.props.deleteCurrentWeather();
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
            //TODO Error handling
            alert('Must be at least 3 characters');
        }
    };

    onSearchBarFocus = () => {
        console.log('search bar focused');
        this.setState({ isSearchFocused: true });
    }

    isWeatherResultEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    render() {
        const { currentWeather } = this.props.weather;
        const result = this.isWeatherResultEmpty(currentWeather);
        const { isSearchFadedIn } = this.state;
        const { isSearchFocused } = this.state;

        return (
            <React.Fragment>
                <GetWeatherAnimation
                    key="search"
                    className="search"
                    initialPose={isSearchFadedIn ? 'visible' : 'hidden'}
                    pose={result ? 'visible' : 'hidden'}
                >
                    {result && (
                        <section className="section" onKeyPress={this.onKeyPress}>
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <h1 className="is-size-3">{this.state.searchTitle}</h1>
                                        <p className="attribution">
                                            Powered by <a
                                            href={'https://openweathermap.org'}>https://openweathermap.org</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                            <SearchBar
                                                name="searchTerm"
                                                value={this.state.searchTerm}
                                                onChange={this.onSearchTermChange}
                                                onFocus={this.onSearchBarFocus}
                                                isFocused={this.state.isSearchFocused}
                                            />
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <GetWeatherButton onClick={this.onClick}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </GetWeatherAnimation>
                <GetWeatherAnimation
                    key="weather"
                    className="weather"
                    pose={!result ? 'visible' : 'hidden'}
                >
                    {!result && (
                        <section className="section">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <button className="button is-small is-link"
                                                onClick={this.onBackToSearchClick}>
                                            Back to Search
                                        </button>
                                        <WeatherCard weather={currentWeather}/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </GetWeatherAnimation>
            </React.Fragment>
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
    deleteCurrentWeather: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    { getCurrentWeatherByZip, getCurrentWeatherByCity, deleteCurrentWeather },
)(GetWeather);
