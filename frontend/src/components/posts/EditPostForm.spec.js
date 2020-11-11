import React from 'react';
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
import { EditPostForm } from './EditPostForm';
import { selectPostById } from './postsSlice';
import { useHistory, MemoryRouter } from 'react-router-dom';

const props = {
  match: {params: 'id'},
}

const { postId }  = props.match.params;
const post = selectPostById.mockReturnValue({id: 'id', title: 'title1', content: 'content1'});

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: jest.fn(),
}));

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));


jest.mock('./postsSlice');

describe('<EditPostForm />', () => {
  let wrapper;
  const setUp = () => shallow(<EditPostForm {...props}/>);

  beforeEach(() => {
    wrapper = setUp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Should chane values and click button', () => {
    it('calls change input', () => {
      expect(wrapper.find('input').prop('value')).toEqual('title1');
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
  });
});