import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, test => {
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

    test('User should see a list of suggestions when they search for a city', ({ given, when, then }) => {
        given('the main page is open', () => {

        });

        when('user starts typing in city textbox', () => {

        });

        then('user should see a list of suggested cities matching what they typed.', () => {

        });
    });

    test('User can select a city from the suggested list', ({ given, and, when, then }) => {
        given('user typed "Berlin" in city textbox', () => {

        });

        and('the list of suggested cities is showing', () => {

        });

        when('user selects a city from list', () => {

        });

        then('city should be changed to the selection', () => {

        });

        and('the user should receive a list of upcoming events in that city.', () => {

        });
    });
});