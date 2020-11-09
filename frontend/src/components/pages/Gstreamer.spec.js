import React from 'react';
import ReactDOM from "react-dom";
import Gstreamer from './Gstreamer';

const setUp = () => shallow(<Gstreamer />);

describe('should render Gstreamer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .content', () => {
    const wrapper = component.find(".content");
    expect(wrapper.length).toBe(1);
  });
});