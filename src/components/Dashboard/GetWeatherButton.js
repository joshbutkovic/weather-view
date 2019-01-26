import React from 'react';

const GetWeatherButton = (props) => {
    return (
        <button className="button is-link is-medium is-rounded" onClick={props.onClick}>
            Get Weather
        </button>
    );
};

export default GetWeatherButton;
