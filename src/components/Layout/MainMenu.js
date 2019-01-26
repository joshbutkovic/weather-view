import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class MainMenu extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item">
                        <FontAwesomeIcon icon="sun" size="2x"/>
                    </Link>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/" className="navbar-item">
                                <FontAwesomeIcon icon="calendar-day" size="2x"/>
                            </Link>
                            <Link to="/" className="navbar-item">
                                <FontAwesomeIcon icon="calendar-week" size="3x"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

MainMenu.propTypes = {};

export default MainMenu;
