import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './GetWeather.scss';
import { connect } from 'react-redux';
import Switch from 'react-toggle-switch';
import {
    getCurrentWeatherByZip,
    getCurrentWeatherByCity,
    clearWeather,
    getForecastByCity,
    getForecastByZip,
    setError,
    clearError,
} from '../../../store/actions/weatherActions';
import { zipRegex, cityRegex } from '../../../utils/regex';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GetWeatherAnimation, GetForecastAnimation, Button, charPoses } from '../../../utils/poseAnimations';
import SplitText from 'react-pose-text';
import SearchBar from '../../SearchBar/SearchBar';
import GetWeatherButton from '../../GetWeatherButton/GetWeatherButton';
import WeatherCard from '../../WeatherCard/WeatherCard';
import Forecast from '../../Forecast/Forecast';

class GetWeather extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            invalidSearch: '',
            invalidMinLength: '',
            invalidMaxLength: '',
            selectedSearchParameter: '',
            poweredByUrl: 'https://openweathermap.org',
            isSearchFadedIn: false,
            isSearchFocused: false,
            isForecastToggled: false,
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
        this.props.clearWeather();
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
        const { searchTerm, isForecastToggled } = this.state;
        const {
            getCurrentWeatherByCity,
            getForecastByCity,
            getCurrentWeatherByZip,
            getForecastByZip,
            clearError,
            setError,
        } = this.props;

        if (this.checkForValidSearchCity(searchTerm)) {
            !isForecastToggled ? getCurrentWeatherByCity(searchTerm) : getForecastByCity(searchTerm);
            clearError();
        } else if (this.checkForValidSearchZip(searchTerm)) {
            !isForecastToggled ? getCurrentWeatherByZip(searchTerm) : getForecastByZip(searchTerm);
            clearError();
        } else {
            setError('Invalid search term');
        }
    };

    onClick = () => {
        const { length } = this.state.searchTerm;
        const { setError } = this.props;
        if (length > 2) {
            this.getWeather();
        } else if (length > 50) {
            setError('Search term must not be more than 50 characters');
        } else {
            setError('Search term must be at least 3 characters');
        }
    };

    onSearchBarFocus = () => {
        this.setState({ isSearchFocused: true });
    };

    onGetWeatherClick = e => {
        if (!e.target.classList.contains('search-bar')) {
            this.setState({ isSearchFocused: false });
        }
    };

    isWeatherResultEmpty = obj => {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) return false;
        }
        return true;
    };

    onToggleSwitchClick = () => {
        this.props.clearError();
        this.setState(prevState => {
            return {
                isForecastToggled: !prevState.isForecastToggled,
                searchTerm: ''
            };
        });
    };

    render() {
        const { currentWeather, forecast } = this.props.weather;
        const { message } = this.props.error;
        const { isSearchFadedIn, isForecastToggled, searchTerm, poweredByUrl } = this.state;
        const currentWeatherEmpty = this.isWeatherResultEmpty(currentWeather);
        const forecastEmpty = this.isWeatherResultEmpty(forecast);

        return (
            <React.Fragment>
                <GetWeatherAnimation
                    key="search"
                    className="search"
                    initialPose={isSearchFadedIn ? 'visible' : 'hidden'}
                    pose={(currentWeatherEmpty && forecastEmpty) ? 'visible' : 'hidden'}
                >
                    {(currentWeatherEmpty && forecastEmpty) && (
                        <section className="section" onKeyPress={this.onKeyPress} onClick={this.onGetWeatherClick}>
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <h3 className="is-size-3">
                                            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                                {!isForecastToggled ? 'Current Weather' : '24 Hour Forecast'}
                                            </SplitText>
                                        </h3>
                                        <p className="attribution">
                                            Powered by <a href={poweredByUrl}>{poweredByUrl}</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <SearchBar
                                            name="searchTerm"
                                            value={searchTerm}
                                            onChange={this.onSearchTermChange}
                                            onFocus={this.onSearchBarFocus}
                                            errorMessage={message}
                                        />
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <div className="columns is-gapless">
                                            <div className="column is-3">
                                                <label>
                                                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                                                        {!isForecastToggled ? 'Current Weather' : '24 Hour Forecast'}
                                                    </SplitText>
                                                </label>
                                            </div>
                                            <div className="column is-1">
                                                <Switch
                                                    className="has-background-link"
                                                    onClick={this.onToggleSwitchClick}
                                                    on={isForecastToggled}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <GetWeatherButton onClick={this.onClick} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </GetWeatherAnimation>
                <GetForecastAnimation
                    key="weather"
                    className="weather"
                    pose={(!currentWeatherEmpty && forecastEmpty) ? 'visible' : 'hidden'}
                >
                    {(!currentWeatherEmpty && forecastEmpty) && (
                        <section className="section">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-10-mobile is-offset-1-mobile is-8 is-offset-2">
                                        <Button className="button is-small is-link" onClick={this.onBackToSearchClick}>
                                            <FontAwesomeIcon icon="arrow-left" />
                                            &nbsp; Back to Search
                                        </Button>
                                        <WeatherCard weather={currentWeather} />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </GetForecastAnimation>
                <GetWeatherAnimation
                    key="forecast"
                    className="forecast"
                    pose={(currentWeatherEmpty && !forecastEmpty) ? 'visible' : 'hidden'}
                >
                    {(currentWeatherEmpty && !forecastEmpty) && (
                        <section className="section">
                            <div className="container">
                                <div className="columns">
                                    <div className="column is-12">
                                        <Button className="button is-small is-link" onClick={this.onBackToSearchClick}>
                                            <FontAwesomeIcon icon="arrow-left" />
                                            &nbsp; Back to Search
                                        </Button>
                                        <Forecast forecast={forecast} />
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
    error: state.error,
});

GetWeather.propTypes = {
    getCurrentWeatherByZip: PropTypes.func.isRequired,
    getCurrentWeatherByCity: PropTypes.func.isRequired,
    clearWeather: PropTypes.func.isRequired,
    getForecastByZip: PropTypes.func.isRequired,
    getForecastByCity: PropTypes.func.isRequired,
    setError: PropTypes.func.isRequired,
    clearError: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    {
        getCurrentWeatherByZip,
        getCurrentWeatherByCity,
        clearWeather,
        getForecastByCity,
        getForecastByZip,
        setError,
        clearError,
    }
)(GetWeather);
