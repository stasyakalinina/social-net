import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './posts.module.css';
import { Textarea } from '../form-controls/form-control';
import { required, maxLengthCreator } from '../../utils/validators';

const maxLength200 = maxLengthCreator(200);

const PostAddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={styles.form}>
      <Field
        component={Textarea}
        validate={[required, maxLength200]}
        name="postBody"
        placeholder="What's new?"
        className={styles.textarea}/>
      <button className={styles.btn}>Add post</button>
    </form>
  );
};

export const ReduxPostAddForm = reduxForm({
  form: 'postAddForm'
})(PostAddForm);