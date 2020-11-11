import React from 'react';
import ReactDOM from "react-dom";
import App from './App';

const setUp = () => shallow(<App />);

describe('should render App component', () => {
	let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain Route', () => {
    const wrapper = component.find("Route");
    expect(wrapper.length).toBe(13);
  });
});