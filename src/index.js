import React from 'react';
import ReactDOM from 'react-dom';
import WeatherViewApp from './app/WeatherViewApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherViewApp />, document.getElementById('weatherViewRoot'));
serviceWorker.unregister();
