import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({ searchTerm, onSearchTermChange }) => {
    return (
        <div className="control has-icons-left has-icons-right">
            <input
                className="input is-medium is-rounded"
                type="text"
                placeholder="Enter a City or Zip"
                value={searchTerm}
                onChange={onSearchTermChange}
            />
            <span className="icon is-left">
                <FontAwesomeIcon icon="city" />
            </span>
            <span className="icon is-right">
                <FontAwesomeIcon icon="search" />
            </span>
        </div>
    );
};

SearchBar.propTypes = {};

export default SearchBar;
