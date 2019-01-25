import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherViewApp from './WeatherViewApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<WeatherViewApp />, document.getElementById('root'));
serviceWorker.unregister();
