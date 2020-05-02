import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
  const {message, like} = props;
  return (
    <div className={styles.block}>
      <img />
      <p>{message}</p>
      <button>Like {like}</button>
    </div>
  )
}

export default Post;