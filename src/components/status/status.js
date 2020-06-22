import React, { Component } from 'react';
import './status.scss'
class Status extends Component {

  state = {
    editMode: false,
    status: this.props.status,
    loading: false,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {

      this.setState({
        status: this.props.status,
        loading: false,
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
      loading: true,
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value,
    });
  }



  render() {

    const content = this.state.editMode
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
      </span>

    return (
      <div className="status">
        { this.state.loading ? <p>Loading...</p> : content }
      </div>
    )
  }
}

export default Status;