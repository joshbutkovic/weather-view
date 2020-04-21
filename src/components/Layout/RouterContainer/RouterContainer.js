import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { PoseGroup } from 'react-pose';
import { RouteTransitionWrapper } from '../../../utils/poseAnimations';
import GetWeather from '../../Container/GetWeather/GetWeather';
import About from '../../Container/About/About';
import ShowCurrentWeather from '../../Container/ShowCurrentWeather/ShowCurrentWeather';
import ShowForecast from '../../Container/ShowForecast/ShowForecast';

const RouterContainer = () => {
    return (
        <Route
            render={({ location }) => (
                <PoseGroup>
                    <RouteTransitionWrapper key={location.pathname}>
                        <Switch location={location}>
                            <Route exact path="/weather-view/" component={GetWeather} key={'get'} />
                            <Route path="/weather-view/about" component={About} key={'about'} />
                            <Route path="/weather-view/current" component={ShowCurrentWeather} key={'current'} />
                            <Route path="/weather-view/forecast" component={ShowForecast} key={'forecast'} />
                        </Switch>
                    </RouteTransitionWrapper>
                </PoseGroup>
            )}
        />
    );
};

RouterContainer.propTypes = {
    location: PropTypes.object,
};

export default RouterContainer;
