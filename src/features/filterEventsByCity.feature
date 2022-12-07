Feature: Filter events by city

Scenario: When user has not searched for a city, show upcoming events from all cities.
Given user has not searched for any city
When the user opens the app
Then the user should see a list of all upcoming events.

Scenario: User should see a list of suggestions when they search for a city
Given the main page is open
When user starts typing in city textbox
Then user should see a list of suggested cities matching what they typed.

Scenario: User can select a city from the suggested list
Given user typed "Berlin" in city textbox
And the list of suggested cities is showing
When user selects a city from list
Then city should be changed to the selection
And the user should receive a list of upcoming events in that city.