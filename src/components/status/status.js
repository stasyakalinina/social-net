import React, { Component } from 'react';
import './status.scss'
class Status extends Component {

  state = {
    editMode: false,
    status: this.props.status,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="status">
        { this.state.editMode
        ? <input
            onChange={(e) => this.onStatusChange(e)}
            className="status__input"
            onBlur={this.deactivateEditMode}
            autoFocus={true}
            value={this.state.status}/>
        : <span
            className="status__text"
            onDoubleClick={this.activateEditMode}>
            {this.props.status || "No status "}
          </span>}
      </div>
    )
  }
}

export default Status;