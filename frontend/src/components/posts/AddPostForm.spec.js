import React from 'react';
import ReactDOM from "react-dom";
import { useDispatch } from 'react-redux';
import { AddPostForm } from './AddPostForm';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
}));

describe('<AddPostForm />', () => {
  let wrapper;
  const setUp = () => shallow(<AddPostForm />);

  beforeEach(() => {
    wrapper = setUp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Should chane values and click button', () => {
    it('calls change input', () => {
      wrapper.find('input').simulate('change', {
        target: {
          value: 'title'
        }
      });
      expect(wrapper.find('input').prop('value')).toEqual('title');
    });

    it('calls change textarea', () => {
      wrapper.find('textarea').simulate('change', {
        target: {
          value: 'content'
        }
      });
      expect(wrapper.find('textarea').prop('value')).toEqual('content');
    });

    it('calls click button', () => {
      wrapper.find('button').simulate('click');
      expect(wrapper).toMatchSnapshot();
    });
  });
});