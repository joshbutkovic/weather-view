import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.scss';
import store from './store/store';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faCloudRain, faRainbow, faCloudSunRain, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './components/Layout/MainMenu';
import Dashboard from './components/Dashboard/Dashboard';

library.add(faSun, faCloudRain, faRainbow, faCloudSunRain, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch);

class WeatherViewApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="WeatherViewApp">
                        <MainMenu />
                            <Switch>
                                <Route exact path="/" component={Dashboard} />
                            </Switch>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default WeatherViewApp;
