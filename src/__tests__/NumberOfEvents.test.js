import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from '../NumberOfEvents';
import { mockData } from '../mock-data';

describe('<NumberOfEvents /> Component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    /**
     * FEATURE 3, SCENARIO 1 - When user hasn’t specified a number, 32 is the default number
     * 
     * The number of shown events is not specified
     * the list of events shows 32 events per page by default
     */

    test('render NumberOfEvents', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    })

    /**
     * FEATURE 3, SCENARIO 2 - User can change the number of events they want to see
     * 
     * number of shown events was specified by user
     * user should see a list of the specified amount of events per page
     */

} )