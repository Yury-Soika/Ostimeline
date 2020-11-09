import React from 'react';
import ReactDOM from "react-dom";
import NavItem from './NavItem';
import { act } from 'react-dom/test-utils';

const props = {
  name: 'name',
  link: '/path',
  iconClass: 'className',
  closeMobileMenu: function close(){},
  children: 'Dropdown'
};

const setMount = (props) => mount(<NavItem {...props}/>);

describe('should render NavItem component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('testing mousedown - 1', () => {
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = setMount(props);
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
    const item = wrapper.find(".navbar-item");
    item.simulate("click");
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
    act(() => {
      map.mousedown({ target: document.createElement('a') });
    });
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
  });

  it('testing mousedown - 2', () => {
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = setMount(props);
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
    const item = wrapper.find(".navbar-item");
    item.simulate("click");
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
    act(() => {
      map.mousedown({ target: wrapper.getDOMNode() });
    });
    expect(wrapper.find('.navbar-item')).toMatchSnapshot();
  });
});