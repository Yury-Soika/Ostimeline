import React from 'react';
import ReactDOM from "react-dom";
import Downloads from './Downloads';

const setUp = () => shallow(<Downloads />);

describe('should render Downloads component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});