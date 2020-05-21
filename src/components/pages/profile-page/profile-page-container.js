import React, { Component } from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../actions';
import ProfilePage from './profile-page';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setUserProfile(response.data);
    });
  }

  render() {
    return (
      <ProfilePage {...this.props} profile={this.props.profile} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer));