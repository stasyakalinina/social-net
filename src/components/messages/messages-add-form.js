import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './messages.module.css';

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}
      className={styles.messageBlock}>
      <Field component="textarea" name="newMessageBody" placeholder="Enter your message" className={styles.textarea}/>
      <button className={styles.btn}>
        Send
      </button>
    </form>
  );
};

export const ReduxAddMessageForm = reduxForm({
  form: 'addMessageForm'
})(AddMessageForm);