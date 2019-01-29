import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';
import { Input, Icon } from '../../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = ({value, onChange, onFocus, isFocused}) => {
    return (
        <div className="search-bar-container control has-icons-left has-icons-right">
            <Input
                className="input is-medium search-bar"
                type="text"
                placeholder="Enter a City or Zip"
                value={value}
                onChange={onChange}
                onFocus={onFocus}
            />
            {/*{!isFocused && (*/}
                {/*<span className="icon is-left">*/}
                {/*<FontAwesomeIcon icon="city" />*/}
            {/*</span>*/}
                {/*<span className="icon is-right">*/}
                {/*<FontAwesomeIcon icon="search" />*/}
                {/*</span>*/}
            {/*)}*/}
        </div>
    );
};

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SearchBar;
