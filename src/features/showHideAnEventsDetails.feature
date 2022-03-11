Feature: SHOW/HIDE an event's details


Scenario: An element is collapsed by default

Given the user is on the main page
When events are displayed
Then the events will be collapsed

Scenario: User can expand an event to see its details

Given the user is on the main page
When he clicks on an event
Then the event expands with additional info

Scenario: User can collapse an event to hide its details

Given the user expanded an event's details
When the user clicks on the expanded event
Then the event will collapse to its default state