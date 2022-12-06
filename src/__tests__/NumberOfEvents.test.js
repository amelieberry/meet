import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEventsNumber={() => {}}/>);
    });

    /**
     * FEATURE 3 - Specify number of events
     */

    // check if the input's container exist
    test('render .NumberOfEvents', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });

    //check if the input itself exists
    test('render .NumberOfEvents-input', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents-input')).toHaveLength(1);
    });

    /**
     * FEATURE 3, SCENARIO 1 - When user hasn’t specified a number, 32 is the default number
     */
     test('input shows 32 events by default', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents-input').prop('value')).toBe(32);
    });

    /**
     * FEATURE 3, SCENARIO 2 - User can change the number of events they want to see
     */
    //  test('change state when number input changes', () => {
    //     NumberOfEventsWrapper.setState({
    //         eventsNum: '13'
    //     });
    //     const eventObject = { target: { value: '13' } };
    //     NumberOfEventsWrapper.find('.NumberOfEvents-input').simulate('change', eventObject);
    //     expect(NumberOfEventsWrapper.state('eventsNum')).toBe('13');
    // });

} )