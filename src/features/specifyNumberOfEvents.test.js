import React from "react";
import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

// FEATURE 3
defineFeature(feature, test => {

    // Scenario 1
    test('When user has not specified a number, 32 is the default', ({ given, when, then }) => {
        given('the number of shown event was not specified', () => {

        });

        when('the event list is displayed', () => {

        });

        then('the user should see a list of 32 events per page by default.', () => {

        });
    });

    // Scenario 2
    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('the number of shown event was specified', () => {

        });

        when('the the event list is displayed', () => {

        });

        then('user should see a list of the specified amount of events per page.', () => {

        });
    });
})