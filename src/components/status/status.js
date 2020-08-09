import React, { useState, useEffect } from 'react';
import './status.scss'

const Status = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [loading, setLoading] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
    setLoading(false);
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    setLoading(true);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  const content = editMode
    ? <input
      onChange={(e) => onStatusChange(e)}
      className="status__input"
      onBlur={deactivateEditMode}
      autoFocus={true}
      value={status}
      />
  : <span
      className="status__text"
      onDoubleClick={activateEditMode}>
      {props.status || "No status "}
    </span>

    return (
      <div className="status">
        { loading ? <p>Loading...</p> : content }
      </div>
    )

}

export default Status;