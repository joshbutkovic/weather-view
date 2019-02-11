import React from 'react';
import { shallow, mount } from 'enzyme';
import ShowCurrentWeather from './ShowCurrentWeather';

describe('ShowCurrentWeather', () => {
    it('should render without crashing', () => {
        const component = shallow(<ShowCurrentWeather/>);
        expect(component).toMatchSnapshot();
    });
    it('should redirect if the weather object is empty', () => {

    });
    describe('weather object is empty', () => {
        it('should redirect to get weather', () => {

        });
    });
});