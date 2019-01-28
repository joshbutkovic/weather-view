import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import posed, { PoseGroup } from 'react-pose';
import Dashboard from '../Dashboard/Dashboard';
import About from '../About/About';

const RouteTransitionWrapper = posed.div({
    enter: { opacity: 1},
    exit: { opacity: 0 }
});

const RouterContainer = ({ location }) => {
    return (
        <PoseGroup>
            <RouteTransitionWrapper key={location.key}>
                <Switch location={location}>
                    <Route exact path="/" component={Dashboard} key={'home'} />
                    <Route path="/about" component={About} key={'about'} />
                </Switch>
            </RouteTransitionWrapper>
        </PoseGroup>
    );
};

export default withRouter(RouterContainer);
