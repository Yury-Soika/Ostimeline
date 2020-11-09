import React from 'react';
import ReactDOM from "react-dom";
import Architecture from './Architecture';

const setUp = () => shallow(<Architecture />);

describe('should render Architecture component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});