import React from 'react';
import ReactDOM from "react-dom";
import Login from './Login';

const setUp = () => shallow(<Login />);

describe('should render Login component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});