import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({value, onChange}) => {
    return (
        <div className="search-bar-container control has-icons-left has-icons-right">
            <input
                className="input is-medium is-rounded search-bar"
                type="text"
                placeholder="Enter a City or Zip"
                value={value}
                onChange={onChange}
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

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
