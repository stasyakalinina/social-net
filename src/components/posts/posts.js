import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';

const Posts = () => {
  return (
    <article className={styles.block}>
      <div className={styles.wrapper}>
        <textarea></textarea>
        <button className={styles.btn}>Add post</button>
      </div>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Post message="Hello world!" like="15" />
        </li>
        <li>
          <Post message="It's my first message" like="20"/>
        </li>
      </ul>
    </article>
  );
};

export default Posts;