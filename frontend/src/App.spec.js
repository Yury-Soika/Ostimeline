import React from 'react';
import ReactDOM from "react-dom";
import App from './App';

const setUp = () => shallow(<App />);

describe('should render App component', () => {
	let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain NavBar', () => {
    const wrapper = component.find("NavBar");
    expect(wrapper.length).toBe(1);
  });

  it('should contain Switch', () => {
    const wrapper = component.find("Switch");
    expect(wrapper.length).toBe(1);
  });

  it('should contain Route', () => {
    const wrapper = component.find("Route");
    expect(wrapper.length).toBe(13);
  });

  it('should contain Footer', () => {
    const wrapper = component.find("Footer");
    expect(wrapper.length).toBe(1);
  });
});