import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft, faSun, faCloudRain, faRainbow, faCloudSunRain, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterContainer from './components/Layout/RouterContainer';
import MainMenu from './components/Layout/MainMenu';

library.add(faArrowLeft, faSun, faCloudRain, faRainbow, faCloudSunRain, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch);

class WeatherViewApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="WeatherViewApp">
                        <MainMenu />
                        <RouterContainer />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default WeatherViewApp;
