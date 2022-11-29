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
        expect(EventWrapper.find('.information', '.date', '.time', '.location')).toHaveLength(1);
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
    test('details are hidden by default', () => {
        expect(EventWrapper.state('isHidden')).toBe(true);
        expect(EventWrapper.find('.details')).toHaveLength(0);
        expect(EventWrapper.find('.toggle-details').text()).toBe('Show Details');
    });

    /**
     * FEATURE 2, SCENARIO 2 - User can expand an event to see its details
     * 
     * user clicks on toggle-details button
     * user should see a list of details of the event (title, htmlLink, description) 
     * and button text should toggle to "Hide Details"
     */

    // simulate click on toggle-details button and check if .details exists
    test('render details of the event on click', () => {
        EventWrapper.find('.toggle-details').simulate('click');
        expect(EventWrapper.state('isHidden')).toBe(false);
        expect(EventWrapper.find('.details')).toHaveLength(1);
    });

    // check if the details of the event are rendered correctly
    test('render details of event correctly', () => {
        expect(EventWrapper.find('.details-title').text()).toBe('About the event:');
        expect(EventWrapper.find('.details-link').prop('href')).toBe(event.htmlLink);
        expect(EventWrapper.find('.details-description').text()).toBe(event.description);
        expect(EventWrapper.find('.toggle-details').text()).toBe('Hide Details');
    });

    /**
     * FEATURE 2, SCENARIO 3 - User can collapse an event to hide its details
     * 
     * user clicks on toggle-details button while the details are showing
     * details of the event get hidden on button click
     * and button text should toggle to "Show Details"
     */

    // simulate click on toggle-details button, check if .details has been hidden and that button text changed
    test('rendered details get hidden on click', () => {
        EventWrapper.find('.toggle-details').simulate('click');
        expect(EventWrapper.state('isHidden')).toBe(true);
        expect(EventWrapper.find('.details')).toHaveLength(0);
        expect(EventWrapper.find('.toggle-details').text()).toBe('Show Details');
    });
})