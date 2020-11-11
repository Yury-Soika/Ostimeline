import React from 'react';
import ReactDOM from "react-dom";
import DownloadButton from './DownloadButton';

const apiUrl = 'http://localhost:8080/downloads/';
window.open = jest.fn();

const download = project => {
  window.open(apiUrl + project);
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
