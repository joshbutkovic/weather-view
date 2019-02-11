import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import WeatherViewApp from './WeatherViewApp';

describe('WeatherViewApp', () => {

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<WeatherViewApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('should render a <div />', () => {
    const wrapper = shallow(<WeatherViewApp />);
    expect(wrapper.find('div').length).toEqual(1);
  });

});

