import React from 'react';
import { shallow } from 'enzyme';
import GetWeatherButton from './GetWeatherButton';

describe('<GetWeatherButton />', () => {

    describe('render', () => {
        const onClick = () => {};
        const isProcessing = false;
        test('render the component', () => {
            const component = shallow(<GetWeatherButton onClick={onClick} isProcessing={isProcessing} />);
            expect(component).toMatchSnapshot();
        });
    });

    describe('props', () => {
        test('isProcessing is false', () => {

        });
    });

});
