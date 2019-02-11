import React from 'react';
import ReactDOM from 'react-dom';
import WeatherViewApp from './WeatherViewApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherViewApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
