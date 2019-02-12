import React from 'react';
import { shallow } from 'enzyme';
import GetWeatherButton from './GetWeatherButton';
import { Button } from '../../utils/poseAnimations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

describe('<GetWeatherButton />', () => {
    let component;
    let handleOnClick;
    let isProcessing = false;
    let buttonWrapper;

    beforeAll(() => {
        handleOnClick = jest.fn();
        component = shallow(<GetWeatherButton isProcessing={isProcessing} handleOnClick={handleOnClick} />);
        buttonWrapper = component.find(Button);
    });

    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });

    it('calls handleOnClick() on button click', () => {
        expect(component.find('.button.is-link')).toHaveLength(1);
        component.find('.button.is-link').simulate('click');
        expect(handleOnClick).toHaveBeenCalled();
    });

    it('has a Button animation element', () => {
        expect(buttonWrapper).toHaveLength(1);
    });

    it('renders the icon', () => {
        const icon = buttonWrapper.find(FontAwesomeIcon);
        expect(icon).toHaveLength(1);
        expect(icon.prop('icon')).toEqual('search');
    });
});
