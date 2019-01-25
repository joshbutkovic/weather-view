import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchBar extends Component {
    render() {
        return (
            <div className="control has-icons-left has-icons-right">
                <input className="input is-medium is-info" type="email" placeholder="Enter a City or Zip" />
                <span className="icon is-left">
                    <FontAwesomeIcon icon="city" />
                </span>
                <span className="icon is-right">
                    <FontAwesomeIcon icon="search" />
                </span>
            </div>
        );
    }
}



SearchBar.propTypes = {};

export default SearchBar;
