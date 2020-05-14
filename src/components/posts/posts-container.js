import React from 'react';
import { addPostCreator, updatePostMessageCreator, } from './../../actions';
import Posts from './posts';
import { StoreConsumer } from '../../store-context/store-context';

const PostsContainer = () => {

  return (
    <StoreConsumer>
      {
        (store) => {
          let state = store.getState();
          console.log(state);

          const onAddPost = () => {
            store.dispatch(addPostCreator());
            store.dispatch(updatePostMessageCreator(''));
          }

          const onPostChange = (text) => {
            store.dispatch(updatePostMessageCreator(text));
          }

          return (
            <Posts
              updatePostText={onPostChange}
              data={state.profilePage}
              addPost={onAddPost}
            />)
        }
      }
    </StoreConsumer>
  );
};

export default PostsContainer;