import React from 'react';
import { shallow } from 'enzyme';
import ShowCurrentWeather from './ShowCurrentWeather';

describe('ShowCurrentWeather', () => {
    test('should render without crashing', () => {
        const component = shallow(<ShowCurrentWeather />);
        expect(component).toMatchSnapshot();
    });
    describe('weather object is empty', () => {
        test('should redirect to get weather', () => {});
    });
});
