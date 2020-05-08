import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';

const Posts = ({data}) => {

  const postItems = data.map((post) =>
    <li key={post.id}>
      <Post message={post.text} like={post.like} />
    </li>
  );

  return (
    <article className={styles.block}>
      <div className={styles.wrapper}>
        <textarea className={styles.textarea} placeholder="What's new?"></textarea>
        <button className={styles.btn}>Add post</button>
      </div>
      <ul className={styles.list}>
        {postItems}
      </ul>
    </article>
  );
};

export default Posts;