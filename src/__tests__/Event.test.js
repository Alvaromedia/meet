import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  test('render summary', () => {
    expect(EventWrapper.find('.summary')).toHaveLength(1);
  });

  test('render location', () => {
    expect(EventWrapper.find('.location')).toHaveLength(1);
  });

  test('render date', () => {
    expect(EventWrapper.find('.date')).toHaveLength(1);
  });

  test('event element is collapsed by default', () => {
    expect(EventWrapper.state('collapsed')).toBe(true);
  });

  test('render showDetails button', () => {
    expect(EventWrapper.find('.showDetails')).toHaveLength(1);
  });

  // test('render hideDetails button', () => {
  //   expect(EventWrapper.find('.hideDetails')).toHaveLength(1);
  // });

  test('show details on click', () => {
    EventWrapper.setState({
      collapsed: true,
    });
    EventWrapper.find('.showDetails').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(false);
  });

  test('hides additional details on click', () => {
    EventWrapper.setState({
      collapsed: false,
    });
    EventWrapper.find('.hideDetails').simulate('click');
    expect(EventWrapper.state('collapsed')).toBe(true);
  });
});
