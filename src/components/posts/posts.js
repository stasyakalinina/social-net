import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';

const Posts = (props) => {

  const postItems = props.data.map((post) =>
    <li key={post.id}>
      <Post message={post.text} like={post.like} />
    </li>
  );

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch({
      type: 'ADD_POST',
    });
    props.dispatch({
      type: 'UPDATE_POST_MESSAGE',
      payload: '',
    });
  }

  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({
      type: 'UPDATE_POST_MESSAGE',
      payload: text,
    });
  }

  return (
    <article className={styles.block}>
      <div className={styles.wrapper}>
        <textarea
          className={styles.textarea}
          placeholder="What's new?"
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
          />
        <button
          className={styles.btn}
          onClick={addPost}>
          Add post
        </button>
      </div>
      <ul className={styles.list}>
        {postItems}
      </ul>
    </article>
  );
};

export default Posts;