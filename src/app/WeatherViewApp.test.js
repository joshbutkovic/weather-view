import React from 'react';
import { shallow, mount } from 'enzyme';
import WeatherViewApp from './WeatherViewApp';
import MainMenu from '../components/Layout/MainMenu/MainMenu';
import RouterContainer from '../components/Layout/RouterContainer/RouterContainer';

describe('WeatherViewApp', () => {
    let appComponentMounted;
    let appComponent;

    beforeAll(() => {
        appComponentMounted = mount(<WeatherViewApp />);
        appComponent = shallow(<WeatherViewApp />);
    });

    describe('rendering tests', () => {

        it('matches snapshot', () => {
            expect(appComponentMounted).toMatchSnapshot();
        });

        it('has a store', () => {

        })

        it('renders a <div />', () => {
            expect(appComponent.find('div').length).toEqual(1);
        });

        it('renders <MainMenu>', () => {
            const mainMenu = appComponent.find(MainMenu);
            expect(mainMenu).toHaveLength(1);
        });

        it('renders <RouterContainer>', () => {
            const routerContainer = appComponent.find(RouterContainer);
            expect(routerContainer).toHaveLength(1);
        });

    });
});
