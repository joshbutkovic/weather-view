import React from 'react';
import { shallow, mount } from 'enzyme';
import GetWeather from './GetWeather';

describe('GetWeather', () => {
    it('should render without crashing', () => {
        const component = shallow(<GetWeather />);
        expect(component).toMatchSnapshot();
    });
});