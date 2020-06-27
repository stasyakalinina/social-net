import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './posts.module.css';

const PostAddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <Field component="textarea" name="postBody" placeholder="What's new?" className={styles.textarea}/>
      <button className={styles.btn}>Add post</button>
    </form>
  );
};

export const ReduxPostAddForm = reduxForm({
  form: 'postAddForm'
})(PostAddForm);