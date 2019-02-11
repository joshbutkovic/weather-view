import React from 'react';
import { shallow } from 'enzyme';
import About from './About';
describe('About', () => {
    it('should render correctly with no props', () => {
        const component = shallow(<About />);
        expect(component).toMatchSnapshot();
    });
});
