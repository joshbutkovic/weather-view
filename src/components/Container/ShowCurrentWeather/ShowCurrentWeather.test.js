import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../../utils/poseAnimations';
import ShowCurrentWeather from './ShowCurrentWeather';

describe('<ShowCurrentWeather />', () => {

    let component;

    beforeAll(() => {
        component = shallow(<ShowCurrentWeather />);
    });

    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });


});
