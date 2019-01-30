import React from 'react';
import PropTypes from 'prop-types';
import './SearchBar.scss';
import { Input } from '../../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Paragraph } from '../../../utils/poseAnimations';

const SearchBar = ({ value, onChange, onFocus, errorMessage = ''}) => {
    return (
        <React.Fragment>
            <div className="search-bar-container control has-icons-right">
                <Input
                    className="input is-medium search-bar"
                    type="text"
                    placeholder="Enter a City or Zip"
                    minlength={3}
                    maxlength={50}
                    value={value}
                    onChange={onChange}
                    onFocus={onFocus}
                />
                <span className="icon is-right">
                    <FontAwesomeIcon icon="search"/>
                </span>
            </div>
            {errorMessage.length > 1 && (
                <Paragraph className="has-text-info">{errorMessage}</Paragraph>
            )}
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
