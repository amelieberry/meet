# MEET
A serverless and progressive React application using test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. 

## Features, User Stories and Scenarios
1. **Filter events by city.**

    > As a user, I should be able to filter events by city so that I can see the list events taking place in that city.
    
    --- | **Given** |  **When** | **Then**
    --- | --- | --- | --- 
    **Scenario 1** | user hasn't searched for any city | the user opens the app | the user should see a list of all upcoming events   
    **Scenario 2** | the main page is open | user starts typing in city textbox | user should see a list of suggested cities matching what they typed 
    **Scenario 3** | user typed "Berlin" in city textbox and list of suggested cities is showing | user selects a city from list | city should be changed to the selction and user should receive a list of events in that city.

2. **Show/hide event details.**
3. **Specify number of events.**
4. **Use the app when offline.**
5. **Add an app shortcut to the home screen.**
6. **View a chart showing the number of upcoming events by city.**

## Built with
* React
* AWS lambda
* Google Calendar API
* OAuth2 authentication flow

## Live Demo
https://amelieberry.github.io/meet/