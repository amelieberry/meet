import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import NumberOfEvents from "../NumberOfEvents";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

// FEATURE 3
defineFeature(feature, test => {
    let AppWrapper;
    // Scenario 1
    test('When user has not specified a number, 32 is the default', ({ given, when, then }) => {
        given('the number of shown event was not specified', () => {

        });

        when('the event list is displayed', () => {
            AppWrapper = mount(<App />);
        });

        then('the user should see a list of 32 events per page by default.', () => {
            AppWrapper.update();
            expect(AppWrapper.state('eventsNumber')).toEqual(32);
        });
    });

    // Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the number of shown event was specified', async () => {
            AppWrapper = await mount(<App />);
        });

        when('the event list is displayed', () => {
            AppWrapper.update();
            let NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
            NumberOfEventsWrapper.find('.NumberOfEvents-input').simulate('change', { target: { value: 1 } });
        });

        then('user should see a list of the specified amount of events per page.', () => {
            expect(AppWrapper.find('.EventList')).toHaveLength(1);
        });
    });
})