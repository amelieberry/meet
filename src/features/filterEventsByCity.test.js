import React from "react";
import { mount, shallow } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { mockData } from "../mock-data";
import CitySearch from "../CitySearch";
import { extractLocations } from "../api";

const feature = loadFeature('./src/features/filterEventsByCity.feature');

// Feature 1
defineFeature(feature, test => {
    //Scenario 1
    test('When user has not searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('user has not searched for any city', () => {

        });

        let AppWrapper;
        when('the user opens the app', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see a list of all upcoming events.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });

    // Scenario 2
    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        let locations, CitySearchWrapper;
        given('the main page is open', () => {
            locations = extractLocations(mockData);
            CitySearchWrapper = shallow(<CitySearch  updateLocations={() => {}} locations={locations} />);
        });

        when('user starts typing in city textbox', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        then('user should see a list of suggested cities matching what they typed.', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
        });
    });

    // Scenario 3
    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        let AppWrapper;
        given('user typed "Berlin" in city textbox', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        and('the list of suggested cities is showing', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });

        when('user selects a city from list', () => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('city should be changed to the selection', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });

        and('the user should receive a list of upcoming events in that city.', () => {
            expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
        });
    });
});