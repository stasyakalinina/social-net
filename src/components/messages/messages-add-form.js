import React from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './messages.module.css';
import { required, maxLengthCreator } from '../../utils/validators';
import { Textarea } from '../form-controls/form-control';
import './messages-add-form.scss'

const maxLength300 = maxLengthCreator(300);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}
      className="AddMessageForm">
      <Field
        component={Textarea}
        name="newMessageBody"
        placeholder="Enter your message"
        className="AddMessageForm__textarea"
        validate={[required, maxLength300]}
        />
      <button className="AddMessageForm__btn">
        Send
      </button>
    </form>
  );
};

export const ReduxAddMessageForm = reduxForm({
  form: 'addMessageForm'
})(AddMessageForm);