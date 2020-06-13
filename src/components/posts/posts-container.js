import { connect } from 'react-redux';
import { addPost, updatePostMessage } from '../../store/profile/actions';
import Posts from './posts';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  }
};

const actions = {
  addPost,
  updatePostMessage
};

const PostsContainer = connect(mapStateToProps, actions)(Posts);

export default PostsContainer;