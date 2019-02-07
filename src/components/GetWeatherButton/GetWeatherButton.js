import React from 'react';
import { Button } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classnames from 'classnames';

const GetWeatherButton = ({isMobile, onClick, isProcessing}) => {
        return (
            <Button
                className={classnames('button is-link', {
                    'is-loading': isProcessing,
                })}
                onClick={onClick}
            >
                <FontAwesomeIcon icon="search"/>
            </Button>
        );
};

export default GetWeatherButton;
