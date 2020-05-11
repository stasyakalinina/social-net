import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';
import { addPostCreator, updatePostMessageCreator, } from './../../actions';

const Posts = (props) => {

  const postItems = props.data.map((post) =>
    <li key={post.id}>
      <Post message={post.text} like={post.like} />
    </li>
  );

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostCreator());
    props.dispatch(updatePostMessageCreator(''));
  }

  const onPostChange = (e) => {
    // let text = newPostElement.current.value;
    let text = e.target.value;
    props.dispatch(updatePostMessageCreator(text));
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