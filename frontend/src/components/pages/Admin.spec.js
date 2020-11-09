import React from 'react';
import ReactDOM from "react-dom";
import Admin from './Admin';
import { selectUser } from '../users/userSlice';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));
jest.mock('../users/userSlice');
const setUp = () => shallow(<Admin />);

describe('should render Admin component', () => {
  it("should render Admin component for Ghost", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render Admin component for Admin", () => {
    const uset = selectUser.mockReturnValue({role: "Admin"});
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
});