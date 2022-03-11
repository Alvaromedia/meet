import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
  test('When user hasn’t specified a number, 32 is the default number (2 while testing locally)', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given('the user is on the main page', () => {
      AppWrapper = mount(<App />);
    });

    when('the user does nothing', () => {
      AppWrapper.update();
    });

    // Running the the test with defineFeature empty gives me the next line in the terminal
    // then(/^the number of events displayed is (\d+)$/, (arg0)
    then(
      'the number of events displayed is 32 (2 while testing locally)',
      () => {
        expect(AppWrapper.find('.event')).toHaveLength(2);
      }
    );
  });

  test('User can change the number of events they want to see', ({
    given,
    when,
    then,
  }) => {
    let AppWrapper;
    given(
      'the user wants to change the number of events displayed',
      async () => {
        AppWrapper = await mount(<App />);
      }
    );

    when('the user specifies it', () => {
      AppWrapper.update();
      AppWrapper.find('.numberEvents').simulate('change', {
        target: { value: '2' },
      });
    });

    then('the specified number of events will be displayed', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(2);
    });
  });
});
