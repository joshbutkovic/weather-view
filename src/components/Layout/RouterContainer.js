import React from 'react';
import { Route, Switch } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import GetWeather from '../GetWeather/GetWeather';
import About from '../About/About';

const RouteTransitionWrapper = posed.div({
    enter: { opacity: 1 },
    exit: { opacity: 0 },
});

const RouterContainer = () => {
    return (
        <Route
            render={({ location }) => (
                <PoseGroup>
                    <RouteTransitionWrapper key={location.pathname}>
                        <Switch location={location}>
                            <Route exact path="/" component={GetWeather} key={'get'} />
                            <Route path="/about" component={About} key={'about'} />
                        </Switch>
                    </RouteTransitionWrapper>
                </PoseGroup>
            )}
        />
    );
};

export default RouterContainer;
