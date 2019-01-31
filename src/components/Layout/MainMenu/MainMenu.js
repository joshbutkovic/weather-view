import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainMenu extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <FontAwesomeIcon icon="cloud-sun-rain" size="2x"/>
                    </Link>
                    <Link to="/about" className="navbar-item">
                        <span className="has-text-weight-semibold is-size-5">About</span>
                    </Link>
                </div>
            </nav>
        );
    }
}

MainMenu.propTypes = {};

export default MainMenu;
