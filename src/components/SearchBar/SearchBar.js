import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';
import { Input } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paragraph } from '../../utils/poseAnimations';

const SearchBar = ({ value, onChange, onFocus, errorMessage = ''}) => {
    return (
        <React.Fragment>

        </React.Fragment>
    );
};

SearchBar.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
};

export default SearchBar;
