Feature: Specify number of events

Scenario: When user hasn’t specified a number, 32 is the default number (2 while testing locally)

Given the user is on the main page
When the user does nothing
Then the number of events displayed is 32 (2 while testing locally)

Scenario: User can change the number of events they want to see

Given the user wants to change the number of events displayed
When the user specifies it
Then the specified number of events will be displayed