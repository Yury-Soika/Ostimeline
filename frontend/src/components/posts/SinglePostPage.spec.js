import React from 'react';
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from 'react-redux';
import { SinglePostPage } from './SinglePostPage';
import { selectPostById } from './postsSlice';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../users/userSlice';

const props = {
  match: {params: 'id'},
}

const { postId }  = props.match.params;
const user = selectUser.mockReturnValue({role: 'Admin'});

jest.mock('react-redux', () => ({
  useSelector: jest.fn(fn => fn()),
  useDispatch: jest.fn(),
}));
jest.mock('../users/userSlice');
jest.mock('./postsSlice');

describe('<SinglePostPage />', () => {
  let wrapper;
  let post;
  const setUp = () => shallow(<SinglePostPage {...props}/>);

  beforeEach(() => {
    wrapper = setUp();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('Should show post page', () => {
    it("should render post page component for existed post", () => {
      post = selectPostById.mockReturnValue({id: 'id', title: 'title', content: 'content'});
      expect(wrapper).toMatchSnapshot();
    });

    it("should render post page component for not existed post", () => {
      post = '';
      expect(wrapper).toMatchSnapshot();
    });
  });
});