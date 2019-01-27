import React from 'react';

const GetWeatherButton = props => {
    return (
        <button className="button is-link is-medium" onClick={props.onClick}>
            Get Weather
        </button>
    );
};

export default GetWeatherButton;
