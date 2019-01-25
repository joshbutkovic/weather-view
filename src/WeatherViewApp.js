import React, { Component } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './components/Layout/MainMenu';
import Dashboard from './components/Dashboard/Dashboard';

library.add(faSun, faCalendarDay, faCalendarWeek, faCalendar, faCity, faSearch);

class WeatherViewApp extends Component {
    render() {
        return (
            <Router>
                <div className="WeatherViewApp">
                    <MainMenu />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default WeatherViewApp;
