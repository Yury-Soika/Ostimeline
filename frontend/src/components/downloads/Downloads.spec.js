import React from 'react';
import ReactDOM from "react-dom";
import Downloads from "./Downloads";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDownloads, selectAllDownloads } from './downloadsSlice';

jest.mock('react-redux', () => ({
  useSelector: jest.fn().mockImplementation(selector => selector()),
  useDispatch: jest.fn(),
}));

jest.mock('./downloadsSlice', () => ({
  selectAllDownloads: jest.fn().mockReturnValue({id: 1, name: 'name', location: '/location'})
}));

const setUp = () => shallow(<Downloads />);

describe('should render Downloads component', () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });
  afterEach(() => {
    useSelector.mockClear();
  });

  it("should render DownloadButton", () => {
    const downloads = useSelector(selectAllDownloads);
    expect(component).toMatchSnapshot();
  });
});