Feature: Show/hide event details

Scenario: An event element is collapsed by default
Given the list of events is diplayed
When the user performs no action
Then the event details should be hidden by default.

Scenario: User can expand an event to see its details
Given the list of events is diplayed
When user clicks on "show details" button
Then user should see the details of the event.

Scenario: User can collapse an event to hide its details
Given event detail is shown to user
When user clicks on "hide details" button
Then event details should be collapsed.