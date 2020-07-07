import React from 'react';
import Post from './../post/post';
import { ReduxPostAddForm } from './posts-add-form';
import './posts.scss';
import '../../main.scss';

const Posts = (props) => {

  const postItems = props.posts.map((post) =>
    <li key={post.id} className="posts__item">
      <Post message={post.text} like={post.like} />
    </li>
  );

  const onAddPost = (value) => {
    props.addPost(value.postBody);
  }

  return (
    <article className="posts">
      <ReduxPostAddForm onSubmit={onAddPost} />
      <ul className="posts__list">
        {postItems}
      </ul>
    </article>
  );
};

export default Posts;