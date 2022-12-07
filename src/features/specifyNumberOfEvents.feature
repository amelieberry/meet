Feature: Specify number of events

Scenario: When user has not specified a number, 32 is the default
Given the number of shown event was not specified
When the event list is displayed
Then the user should see a list of 32 events per page by default.

Scenario: User can expand an event to see its details
Given the number of shown event was specified
When the event list is displayed
Then user should see a list of the specified amount of events per page.