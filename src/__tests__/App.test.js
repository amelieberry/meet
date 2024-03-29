import React from "react";
import { shallow, mount } from "enzyme";
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberOfEvents from "../NumberOfEvents";
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

// Unit Testing: test App.js component
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

    // Feature 3, Scenario 1
    test('render NumberOfEvents)', () => {
        expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
    });
});

// Integration Testing: test app integration
describe('<App /> integration', () => {

    // EventList should get events as a prop from App, where it will be defined in its state
    test('App passes "events" state as a prop to EventList', () => {
        const AppWrapper = mount(<App />);
        const AppEventsState = AppWrapper.state('events');
        expect(AppEventsState).not.toEqual(undefined);
        expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
        AppWrapper.unmount();
    });

    // CitySearch should get locations as a prop from App, where it will be defined in its state
    test('App passes "locations" state as a prop to CitySearch', () => {
        const AppWrapper = mount(<App />);
        const AppLocationsState = AppWrapper.state('locations');
        expect(AppLocationsState).not.toEqual(undefined);
        expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
        AppWrapper.unmount();
    });

    // if user clicks on a specific city, only events from that city should be listed
    test('get list of events matching the city selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const CitySearchWrapper = AppWrapper.find(CitySearch);
        const locations = extractLocations(mockData);
        CitySearchWrapper.setState({ suggestions: locations });
        const suggestions = CitySearchWrapper.state('suggestions');
        const selectedIndex = Math.floor(Math.random() * (suggestions.length));
        const selectedCity = suggestions[selectedIndex];
        await CitySearchWrapper.instance().handleItemClicked(selectedCity);
        const allEvents = await getEvents();
        const eventsToShow = allEvents.filter(event => event.location === selectedCity);
        expect(AppWrapper.state('events')).toEqual(eventsToShow);
        AppWrapper.unmount();
    });

    //If a user clicks on "See all cities", all events should be listed
    test('get list of all events when user selects "See all cities"', async () => {
        const AppWrapper = mount(<App />);
        const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
        // simulates a click on the last list item (which will always be “See all cities”)
        await suggestionItems.at(suggestionItems.length - 1).simulate('click');
        const allEvents = await getEvents();
        // checks if the events state of the App component equals the list of all events
        expect(AppWrapper.state('events')).toEqual(allEvents);
        AppWrapper.unmount();
    });

    /**
    * FEATURE 3 - Specify number of events
    */

    // NumberOfEvents should get eventsNumber as a prop from App, where it will be defined in its state
    test('App passes "eventsNumber" state as a prop to NumberOfEvents', () => {
        const AppWrapper = mount(<App />);
        const AppEventsNumState = AppWrapper.state('eventsNumber');
        expect(AppEventsNumState).not.toEqual(undefined);
        expect(AppWrapper.find(NumberOfEvents).props().eventsNumber).toEqual(AppEventsNumState);
        AppWrapper.unmount();
    });

    // if user updates the number of events, only the specified number of events should be listed
    test('display list of events matching the number selected by the user', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        NumberOfEventsWrapper.find('.NumberOfEvents-input').simulate('change', {
            target: { value: 13 }
        });
        await getEvents();
        expect(NumberOfEventsWrapper.state('eventsNumber')).toBe(13);
        expect(AppWrapper.state('eventsNumber')).toBe(13);
        AppWrapper.unmount();
    });

    // Number of events displayed should match number of events input
    test('render number of events in list matching number input', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 1 } };
        await NumberOfEventsWrapper.instance().handleInputChange(eventObject);
        await getEvents();
        expect(AppWrapper.state('events')).toHaveLength(1);
        AppWrapper.unmount();
    })

    // Events displayed should match mock data
    test('render events matching mock data', async () => {
        const AppWrapper = mount(<App />);
        const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
        const eventObject = { target: { value: 1 } };
        await NumberOfEventsWrapper.instance().handleInputChange(eventObject);
        await getEvents();
        expect(AppWrapper.state('events')).toEqual([mockData[0]]);
        AppWrapper.unmount();
    })
})