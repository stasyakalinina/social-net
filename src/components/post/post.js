import React from 'react';
import styles from './post.module.css';

const Post = (props) => {
  const {message, like} = props;
  return (
    <div className={styles.block}>
      <img src="https://i.pinimg.com/474x/82/14/60/8214601fb6d99bdc0df093133bd5da64.jpg" alt="ava" className={styles.ava} />
      <div className={styles.text}>{message}
        <button className={styles.like}>Like {like}</button>
      </div>
    </div>
  )
}

export default Post;