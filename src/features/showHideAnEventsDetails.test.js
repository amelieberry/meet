import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

// FEATURE 2
defineFeature(feature, test => {
    let AppWrapper;

    // Scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('the list of events is diplayed', () => {
            AppWrapper = mount(<App/>);
        });

        when('the user performs no action', () => {
            
        });

        then('the event details should be hidden by default.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event .details')).toHaveLength(0);
        });
    });

    //Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the list of events is diplayed', () => {
            AppWrapper = mount(<App/>);
        });

        when('user clicks on "show details" button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .toggle-details').at(0).simulate('click');
        });

        then('user should see the details of the event.', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(1);
        });
    });

    // Scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('event detail is shown to user', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.event .toggle-details').at(0).simulate('click');
        });

        when('user clicks on "hide details" button', () => {
            AppWrapper.update();
            AppWrapper.find('.event .toggle-details').at(0).simulate('click');
        });

        then('event details should be collapsed.', () => {
            expect(AppWrapper.find('.event .details')).toHaveLength(0);
        });
    });
})