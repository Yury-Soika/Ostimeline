import React from 'react';
import ReactDOM from "react-dom";
import Dropdown from './Dropdown';

const props = {
  menuItem: [
    {
      title: 'title',
      path: '/path',
      cName: 'className'
    }
  ]
};

const setUp = (props) => shallow(<Dropdown {...props}/>);

describe('should render Dropdown component', () => {
  let component;
  let instance;

  beforeEach(() => {
    component = setUp(props);
    instance = component.instance();
  });

  it("should render Dropdown", () => {
    expect(component).toMatchSnapshot();
  });
 
  describe('Dropdown click', () => {
    it("should click ul", () => {
      const ul = component.find("ul");
      ul.simulate("click");
      expect(component).toMatchSnapshot();
    });

    it("should click Link", () => {
      const link = component.find("Link");
      link.simulate("click");
      expect(component).toMatchSnapshot();
    });
  });
});