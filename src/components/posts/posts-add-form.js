import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../form-controls/form-control';
import { required, maxLengthCreator } from '../../utils/validators';
import './posts.scss';

const maxLength200 = maxLengthCreator(200);

const PostAddForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="posts__form">
      <Field
        component={Textarea}
        validate={[required, maxLength200]}
        name="postBody"
        placeholder="What's new?"
        className="posts__textarea"/>
      <button className="btn">Add post</button>
    </form>
  );
};

export const ReduxPostAddForm = reduxForm({
  form: 'postAddForm'
})(PostAddForm);