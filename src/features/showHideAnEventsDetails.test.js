import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
  // First scenario
  test('An element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper;
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
      AppWrapper.update();
    });

    when('events are displayed', () => {});

    then('the events will be collapsed', () => {
      expect(AppWrapper.find('.extraDetails')).toHaveLength(0);
    });
  });

  // Second scenario
  test('User can expand an event to see its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('he clicks on an event', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.showDetails')).toHaveLength(2);
      AppWrapper.find('.showDetails').at(0).simulate('click');
    });

    then('the event expands with additional info', () => {
      expect(AppWrapper.find('.extraDetails')).toHaveLength(1);
    });
  });

  // Third scenario
  test('User can collapse an event to hide its details', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    // I was getting an error all the time until I converted it to an async function
    given("the user expanded an event's details", async () => {
      AppWrapper = await mount(<App />);
      AppWrapper.update();
      AppWrapper.find('.showDetails').at(0).simulate('click');
      expect(AppWrapper.find('.extraDetails')).toHaveLength(1);
    });

    when('the user clicks on the expanded event', () => {
      AppWrapper.find('.hideDetails').at(0).simulate('click');
    });

    then('the event will collapse to its default state', () => {
      expect(AppWrapper.find('.extraDetails')).toHaveLength(0);
    });
  });
});
