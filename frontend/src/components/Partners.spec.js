import React from 'react';
import ReactDOM from "react-dom";
import Partners from './Partners';

const setUp = () => shallow(<Partners />);

describe('should render Partners component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should contain .sidebar', () => {
    const wrapper = component.find(".sidebar");
    expect(wrapper.length).toBe(1);
  });
});