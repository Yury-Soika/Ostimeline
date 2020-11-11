import React from 'react';
import ReactDOM from "react-dom";
import About from './About';

const setUp = () => shallow(<About />);

describe('should render About component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});