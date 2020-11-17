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
    expect(wrapper.find('a')).toMatchSnapshot();
    const item = wrapper.find("a");
    item.simulate("click");
    expect(wrapper.find('a')).toMatchSnapshot();
    act(() => {
      map.mousedown({ target: document.createElement('div') });
    });
    expect(wrapper.find('a')).toMatchSnapshot();
  });

  it('testing mousedown - 2', () => {
    const map = {};
    document.addEventListener = jest.fn((event, callback) => {
      map[event] = callback;
    });
    const wrapper = setMount(props);
    expect(wrapper.find('a')).toMatchSnapshot();
    const item = wrapper.find("a");
    item.simulate("click");
    expect(wrapper.find('a')).toMatchSnapshot();
    act(() => {
      map.mousedown({ target: wrapper.getDOMNode() });
    });
    expect(wrapper.find('a')).toMatchSnapshot();
  });
});