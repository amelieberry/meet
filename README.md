# MEET
A serverless and progressive React application using test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events. 

## Features, User Stories and Scenarios
1. **Filter events by city.**

    > As a user, I should be able to filter events by city so that I can see the list events taking place in that city.
    
    **SCENARIOS** | **Given** |  **When** | **Then**
    ---------- | --- | --- | --- 
    **Scenario 1** | user hasn't searched for any city | the user opens the app | the user should see a list of all upcoming events   
    **Scenario 2** | the main page is open | user starts typing in city textbox | user should see a list of suggested cities matching what they typed 
    **Scenario 3** | user typed "Berlin" in city textbox and list of suggested cities is showing | user selects a city from list | city should be changed to the selction and user should receive a list of events in that city.

2. **Show/hide event details.**

    > As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
        
    **SCENARIOS** | **Given** |  **When** | **Then**
    ---------- | --- | --- | --- 
    **Scenario 1** | the list of events is diplayed | the user scrolls through the events list | the event details should be hidden by default   
    **Scenario 2** | the list of events is diplayed | user clicks on "show details" button | user should see the details of the event
    **Scenario 3** | event detail is shown to user | user clicks on "hide details" | event details should be collapsed

3. **Specify number of events.**

    > As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
            
    **SCENARIOS** | **Given** |  **When** | **Then**
    ---------- | --- | --- | --- 
    **Scenario 1** | number of shown event was not specified | the event list is displayed | user should see a list of 32 events per page by default   
    **Scenario 2** | number of shown events was specified by user | the event list is displayed | user should see a list of the specified amount of events per page

4. **Use the app when offline.**

    > As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
            
    **SCENARIOS** | **Given** |  **When** | **Then**
    ---------- | --- | --- | --- 
    **Scenario 1** | user is not connected to the internet | user accesses the app | app should show cached data
    **Scenario 2** | user is not connected to the internet | app settings are changed by user | user should see an error message stating that they should first connect to the internet

5. **Add an app shortcut to the home screen.**

    > As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

6. **View a chart showing the number of upcoming events by city.**

    > As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.
                    
    **SCENARIOS** | **Given** |  **When** | **Then**
    ---------- | --- | --- | --- 
    **Scenario 1** | user hasn't searched for any city | the user opens the app | the user should see a chart of upcoming events by city 

## Built with
* React
* AWS lambda
* Google Calendar API
* OAuth2 authentication flow
* Tailwind CSS

## Live Demo
https://amelieberry.github.io/meet/