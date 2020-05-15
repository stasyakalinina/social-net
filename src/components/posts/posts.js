import React from 'react';
import styles from './posts.module.css';
import Post from './../post/post';

const Posts = (props) => {
  console.log(props);

  const postItems = props.posts.map((post) =>
    <li key={post.id}>
      <Post message={post.text} like={post.like} />
    </li>
  );

  let newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  }

  const onPostChange = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
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
          onClick={onAddPost}>
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