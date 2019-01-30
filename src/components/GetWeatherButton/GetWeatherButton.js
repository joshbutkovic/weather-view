import React from 'react';
import { Button } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const GetWeatherButton = props => {
    return (
        <Button className="button is-link is-medium" onClick={props.onClick}>
            <FontAwesomeIcon icon="cloud-sun-rain"/>&nbsp;
            Get Weather
        </Button>
    );
};

export default GetWeatherButton;
