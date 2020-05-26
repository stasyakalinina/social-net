import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from '../../../actions';
import ProfilePage from './profile-page';
import { withRouter } from 'react-router-dom';
import { profileAPI } from '../../../services/api';

class ProfileContainer extends Component {

  componentDidMount() {

    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }

    profileAPI.getProfile(userId)
      .then(data => {
        this.props.setUserProfile(data);
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