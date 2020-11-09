import React from 'react';
import ReactDOM from "react-dom";
import Footer from './Footer';

const setUp = () => shallow(<Footer />);

describe('should render Footer component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .footer', () => {
    const wrapper = component.find(".footer");
    expect(wrapper.length).toBe(1);
  });
});