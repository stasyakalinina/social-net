import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus } from '../../../store/profile/actions';
import ProfilePage from './profile-page';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
    }

    this.props.getUserProfile(userId);

    this.props.getStatus(userId);
  }

  render() {
    return (
      <ProfilePage {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  }
}

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter
)(ProfileContainer);
