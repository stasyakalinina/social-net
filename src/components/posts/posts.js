import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';
import { ReduxPostAddForm } from './posts-add-form';

const Posts = (props) => {

  const postItems = props.posts.map((post) =>
    <li key={post.id}>
      <Post message={post.text} like={post.like} />
    </li>
  );

  const onAddPost = (value) => {
    props.addPost(value.postBody);
  }

  return (
    <article className={styles.block}>
      <ReduxPostAddForm onSubmit={onAddPost} />
      <ul className={styles.list}>
        {postItems}
      </ul>
    </article>
  );
};

export default Posts;