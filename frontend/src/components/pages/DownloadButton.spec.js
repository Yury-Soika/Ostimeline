import React from 'react';
import ReactDOM from "react-dom";
import DownloadButton from './DownloadButton';
import { apiUrl } from './../config';

const downloadsRoute = '/downloads/';
window.open = jest.fn();

const download = project => {
  window.open(apiUrl + downloadsRoute + project);
}

const props = {
  path: 'path',
  name: 'name'
};

const setUp = (props) => shallow(<DownloadButton {...props}/>);

describe('should render DownloadButton component', () => {
  let component;

  beforeEach(() => {
    component = setUp(props);
  });

  it("should render DownloadButton", () => {
    expect(component).toMatchSnapshot();
  });

  it("should click button", () => {
    const button = component.find("button");
    button.simulate("click");
    window.open.mockClear();
    download(apiUrl + props.path);
    expect(window.open).toBeCalled();
  });
});
