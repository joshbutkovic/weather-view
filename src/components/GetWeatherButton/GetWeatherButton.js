import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const GetWeatherButton = ({onClick, isProcessing}) => {
        return (
            <Button
                className={
                    classnames('button is-link', {
                    'is-loading': isProcessing,
                    })
                }
                onClick={onClick}
            >
                <FontAwesomeIcon icon="search"/>
            </Button>
        );
};

GetWeatherButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    isProcessing: PropTypes.bool.isRequired
};

export default GetWeatherButton;
