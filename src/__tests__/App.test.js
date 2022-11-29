import React from "react";
import { shallow } from "enzyme";
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';

// test App.js component
describe('<App /> component', () => {
    let AppWrapper;
    beforeAll(() => {
        AppWrapper = shallow(<App />);
    });
    
    // Feature 1, Scenario 1
    test('render list of events', () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
    });

    // Feature 1, Scenario 2
    test('render CitySearch', () => {
        expect(AppWrapper.find(CitySearch)).toHaveLength(1);
    });
});