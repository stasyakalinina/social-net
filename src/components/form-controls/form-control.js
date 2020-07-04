import React from 'react';
import './form-control.scss';

const FormControl = ({ meta, ...props }) => {
  return (
    <div className={ meta.touched && meta.error ? "FormControl FormControl--error" : "FormControl" } >
      { props.children }
      { meta.touched && meta.error ? <span className="FormControl__message">{meta.error}</span> : null }
    </div>
  )
};

export const Textarea = (props) => {
  const {input, meta, ...otherProps} = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...otherProps} />
    </FormControl>
  )
};

export const Input = (props) => {
  const {input, meta, ...otherProps} = props;
  return (
    <FormControl {...props}>
      <input {...input} {...otherProps} />
    </FormControl>
  )
};