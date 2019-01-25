import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import SearchBar from './SearchBar';

class Dashboard extends Component {
    render() {
        return (
            <section className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <SearchBar />
                </div>
            </section>
        );
    }
}

Dashboard.propTypes = {};

export default Dashboard;
