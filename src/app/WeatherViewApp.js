import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './WeatherViewApp.scss';
import store from '../store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearchLocation, faArrowLeft, faCloudRain, faCloudSunRain,
    faCalendarDay, faCalendarWeek, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterContainer from '../components/Layout/RouterContainer/RouterContainer';
import MainMenu from '../components/Layout/MainMenu/MainMenu';

library.add(faSearchLocation, faArrowLeft, faCloudRain,
    faCloudSunRain, faCalendarDay, faCalendarWeek, faCalendar, faSearch);

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
