import React from 'react';
import ReactDOM from "react-dom";
import Installation from './Installation';

const setUp = () => shallow(<Installation />);

describe('should render Installation component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});