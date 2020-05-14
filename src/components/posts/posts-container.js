import React from 'react';
import { addPostCreator, updatePostMessageCreator, } from './../../actions';
import Posts from './posts';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePostText: (text) => {
      dispatch(updatePostMessageCreator(text));
    },
    addPost: () => {
      dispatch(addPostCreator());
      dispatch(updatePostMessageCreator(''));
    }
  }
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;