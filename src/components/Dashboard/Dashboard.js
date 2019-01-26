import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.scss';
import { connect } from 'react-redux';
import { getCurrentWeatherByZip } from '../../store/actions/weatherActions';
import { zipRegex, cityRegex } from '../../configuration/regex';
import SearchBar from './SearchBar/SearchBar';
import GetWeatherButton from './GetWeatherButton';

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            selectedSearchParameter: '',
        };
    }

    onSearchTermChange = e => {
        this.setState({
            searchTerm: e.target.value,
        });
    };

    checkForValidSearchCity = searchTerm => {
        return cityRegex.test(searchTerm);
    };

    checkForValidSearchZip = searchTerm => {
        return zipRegex.test(searchTerm);
    };


    onClick = () => {
        if (this.checkForValidSearchCity(this.state.searchTerm)) {
            alert('valid city entered but search not built');
        } else if (this.checkForValidSearchZip(this.state.searchTerm)) {
            alert('valid zip code entered');
            // this.props.getCurrentWeatherByZip(this.state.searchTerm);
        }
    };

    render() {
        return (
            <React.Fragment>
                <section className="columns">
                    <div className="column is-4 is-offset-4">
                        <SearchBar name="searchTerm" value={this.state.searchTerm} onChange={this.onSearchTermChange} />
                    </div>
                </section>
                <section className="columns">
                    <div className="column is-centered is-4 is-offset-4">
                        <GetWeatherButton onClick={this.onClick} />
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    searchTerm: state.searchTerm,
});

Dashboard.propTypes = {
    getCurrentWeatherByZip: PropTypes.func.isRequired,
};

export default connect(
    mapStateToProps,
    { getCurrentWeatherByZip },
)(Dashboard);
