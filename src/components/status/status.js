import React, { Component } from 'react';

class Status extends Component {

  state = {
    editMode: false,
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: true,
    })
  }

  render() {
    return (
      <div>
        { this.state.editMode
        ? <input value={this.props.status} onBlur={this.deactivateEditMode} autoFocus={true}/>
        : <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>}
      </div>
    )
  }
}

export default Status;