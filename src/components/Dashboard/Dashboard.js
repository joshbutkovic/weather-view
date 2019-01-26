import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { connect } from 'react-redux';
import {getCurrentWeather} from '../../store/actions/weatherActions';
import SearchBar from './SearchBar';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        };
    }

    onSearchTermChange = (event) => {
        console.log(event.target.value);
        this.setState({
            searchTerm: event.target.value,
        });
    };

    render() {
        return (
            <section className="columns">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <SearchBar
                        name="searchTerm"
                        valueOfUserInput={this.state.searchTerm}
                        onSearchTermChange={this.onSearchTermChange}
                    />
                </div>
            </section>
        );
    }
}

// mapping state to props from redux
const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
});

// Type checking for AddProject
Dashboard.propTypes = {
    getCurrentWeather: PropTypes.func.isRequired,
};

// Wiring the create project action to this component
export default connect(
    mapStateToProps,
    { getCurrentWeather },
)(Dashboard);
