import React from 'react';
import ReactDOM from "react-dom";
import NavBar from './NavBar';
import { selectUser } from './users/userSlice';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));
jest.mock('./users/userSlice');
const setUp = () => shallow(<NavBar />);

describe('should render NavBar component', () => {
  it("should render NavBar component for Ghost", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render NavBar component for Admin", () => {
    const uset = selectUser.mockReturnValue({role: 'Admin'});
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  describe('click', () => {
    it("should click navbar-logo", () => {
      const component = setUp();
      const logo = component.find(".navbar-logo");
      logo.simulate("click");
      expect(component).toMatchSnapshot();
    });

    it("should click menu-icon", () => {
      const component = setUp();
      const item = component.find(".menu-icon");
      item.simulate("click");
      expect(component).toMatchSnapshot();
    });
  });
});