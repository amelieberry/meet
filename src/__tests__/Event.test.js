import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../mock-data";

describe('<Event /> component', () => {
    let event, EventWrapper;
    beforeAll(() => {
        event = mockData[0];
        EventWrapper = shallow(<Event event={event}/>)
    })

    /**
     * FEATURE 2, SCENARIO 1 - An event element is collapsed by default
     * 
     * User sees a list of event elements (tested in EventList.test.js)
     * Each event element constains a summary (name of the event),
     * as well as some information: location, date and time .
     * Each event element also hold a button to view details
     * Details should be hidden by default
     */
    
    // check if summary exists
    test('render event summary', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(1);
    });

    // check if summary correctly renders in the mock event
    test('render event summary correctly', () => {
        expect(EventWrapper.find('.summary').text()).toBe(event.summary);
    });

    // check if event information exists
    test('render event information', () => {
        expect(EventWrapper.find('.information')).toHaveLength(1);
        expect(EventWrapper.find('.date')).toHaveLength(1);
        expect(EventWrapper.find('.time')).toHaveLength(1);
        expect(EventWrapper.find('.location')).toHaveLength(1);
    });

    // check if event information is correctly rendered with date, time and location
    test('render event information correctly', () => {
        expect(EventWrapper.find('.date').text()).toBe(event.start.dateTime);
        expect(EventWrapper.find('.time').text()).toBe(event.start.timeZone);
        expect(EventWrapper.find('.location').text()).toBe(event.location);
    });

    // check if toggle-details button exists
    test('render toggle-details button', () => {
        expect(EventWrapper.find('.toggle-details')).toHaveLength(1);
    });

    // check if details are hidden by default and that the button's text is set to "Show Details"
    test('do not render details by default', () => {
        expect(EventWrapper.find('.details')).toHaveLength(0);
        expect(EventWrapper.find('.toggle-details').text()).toBe('Show Details')
    });
    /**
     * FEATURE 2, SCENARIO 2 - User can expand an event to see its details
     * 
     * user clicks on display-details button
     * user should see a list of details of the event (htmlLink, description)
     */

    // simulate click on display-details button and check if .details exists

    // check if the details of the event are rendered correctly

    /**
     * FEATURE 2, SCENARIO 3 - User can collapse an event to hide its details
     * 
     * user clicks on hide-details button
     * details of the event get hidden on button click
     */

    // check if hide-details button exists

    // simulate click on hide-details button and check if .details has been hidden
})