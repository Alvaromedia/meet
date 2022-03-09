# Meet App

It will be a progressive web application (PWA) built with React using a test-driven
development (TDD) technique. The application uses the Google Calendar API to fetch
upcoming events.

### Feature 1: Filter Events by City

User Story: As a user I should be able to “filter events by city”, so that I can see the list of events
that take place in that city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

- Given user hasn’t searched for any city
- When the user opens the app
- Then the user should see the list of upcoming events from around the world.

Scenario 2: Show a List of Suggestions During Search

- Given the main page is open
- When user starts typing in the city textbox
- Then the user should receive a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list

- Given user was typing “Berlin” in the city textbox and the list of suggested cities is showing
- When the user selects a city (e.g., “Berlin, Germany”) from the list
  then their city should be changed to that city (i.e., “Berlin, Germany”)
- And the user should receive a list of upcoming events in that city.
- And the list of suggestions should disappear.

### FEATURE 2: SHOW/HIDE an event's details

User Story: As a user, I should be able to expand or collapse additional information, so that I
can toggle it whether it interests me or not.

Scenario 1: An element is collapsed by default

- Given, the user is on the main page
- When, events are displayed
- Then, the events will be collapsed

Scenario 2: User can expand an event to see its details

- Given, the user is on the main page
- When, he clicks on an event
- Then, the event expands with additional info

Scenario 3: User can collapse an event to hide its details

- Given, the user expanded an event's details
- When, the user clicks on the expanded event
- Then, the event will collapse to its default state

### FEATURE 3: Specify number of events

User Story: As a user I should be able to change the number of events displayed, so that the
settings feel more personal

Scenario 1: When user hasn’t specified a number, 32 is the default number

- Given, the user is on the main page
- When, the user does nothing
- Then, the number of events displayed is 32

Scenario 2: User can change the number of events they want to see

- Given, the user wants to change the number of events displayed
- When, the user specifies it
- Then, the specified number of events will be displayed

### FEATURE 4: Use the app when offline

User Story: As a user, while offline, I should be able to check the information already loaded so
that I don’t need an internet connection

Scenario 1: Show cached data when there’s no internet connection

- Given, the user is offline
- When, opens the app
- Then, the data that was loaded is still accessible
- Scenario 2: Show error when user changes the settings (city, time range)
- Given, the user is offline
- When, the user changes the settings
- Then, an error message will appear

### FEATURE 5: Data visualization

User Story: As a user I should be able to see upcoming events with more detailed information
so that I can see whether it fits me or not

Scenario 1: Show a chart with the number of upcoming events in each city

- Given, the user is on the main page
- When, looking for upcoming events
- Then, a chart will show the number of events per city
