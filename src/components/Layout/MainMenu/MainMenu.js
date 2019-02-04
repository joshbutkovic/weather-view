import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavIcon } from '../../../utils/poseAnimations';

class MainMenu extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <NavIcon>
                            <FontAwesomeIcon icon="cloud-sun-rain" size="2x"/>
                        </NavIcon>
                    </Link>
                    <Link to="/about" className="navbar-item">
                        <NavIcon>
                            <span className="has-text-weight-semibold is-size-5">About</span>
                        </NavIcon>
                    </Link>
                </div>
            </nav>
        );
    }
}

MainMenu.propTypes = {};

export default MainMenu;
