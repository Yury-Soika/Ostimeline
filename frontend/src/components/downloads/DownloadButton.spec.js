import React from 'react';
import ReactDOM from "react-dom";
import DownloadButton from "./DownloadButton";
import { apiUrl }  from "./../config.js";

window.open = jest.fn();

const props = {
  download: {
    id: 'id',
    name: 'name'
  }  
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
    window.open(apiUrl + "/download/" + props.download.id);
    expect(window.open).toBeCalled();
  });
});