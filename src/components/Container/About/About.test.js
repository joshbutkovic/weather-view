import React from 'react';
import { shallow } from 'enzyme';
import About from './About';

describe('<About />', () => {
    it('matches snapshot', () => {
        const component = shallow(<About />);
        expect(component).toMatchSnapshot();
    });
});
