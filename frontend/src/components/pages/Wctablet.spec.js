import React from 'react';
import ReactDOM from "react-dom";
import Wctablet from './Wctablet';

const setUp = () => shallow(<Wctablet />);

describe('should render Wctablet component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});