import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

// FEATURE 2
defineFeature(feature, test => {

    // Scenario 1
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppWrapper;
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

        });

        when('user clicks on "show details" button', () => {

        });

        then('user should see the details of the event.', () => {

        });
    });

    // Scenario 3
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('event detail is shown to user', () => {

        });

        when('user clicks on "hide details" button', () => {

        });

        then('event details should be collapsed.', () => {

        });
    });
})