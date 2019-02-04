import React from 'react';
import { Button } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GetWeatherButton = ({isMobile, onClick}) => {
        return (
            <Button className="button is-link" onClick={onClick}>
                <FontAwesomeIcon icon="search"/>
            </Button>
        );
};

export default GetWeatherButton;
