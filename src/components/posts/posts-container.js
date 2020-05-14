import React from 'react';
import { addPostCreator, updatePostMessageCreator, } from './../../actions';
import Posts from './posts';

const PostsContainer = (props) => {

  const addPost = () => {
    props.dispatch(addPostCreator());
    props.dispatch(updatePostMessageCreator(''));
  }

  const onPostChange = (text) => {
    props.dispatch(updatePostMessageCreator(text));
  }

  return (
    <Posts
      updatePostText={onPostChange}
      data={props.data}
      addPost={addPost}
     />
  );
};

export default PostsContainer;