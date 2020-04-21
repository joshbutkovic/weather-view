import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './MainMenu.scss';
import { NavIcon } from '../../../utils/poseAnimations';

const MainMenu = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <NavLink exact to="/weather-view" className="navbar-item" activeClassName="is-active">
                    <NavIcon>
                        <FontAwesomeIcon icon="cloud-sun-rain" size="2x" />
                    </NavIcon>
                </NavLink>
                <NavLink to="weather-view/about" className="navbar-item" activeClassName="is-active">
                    <NavIcon>
                        <span className="has-text-weight-semibold is-size-5">About</span>
                    </NavIcon>
                </NavLink>
            </div>
        </nav>
    );
};

export default MainMenu;
