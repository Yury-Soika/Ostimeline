import React from 'react';
import ReactDOM from "react-dom";
import News from './News';
import { selectUser } from '../users/userSlice';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
}));
jest.mock('../users/userSlice');
const setUp = () => shallow(<News />);

describe('should render News component', () => {
  it("should render News component for Ghost", () => {
    const component = setUp();
    expect(component).toMatchSnapshot();
  });

  it("should render News component for Admin", () => {
    const uset = selectUser.mockReturnValue({});
    const component = setUp();
    expect(component).toMatchSnapshot();
  });
});