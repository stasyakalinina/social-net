import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../store/profile/actions';
import ProfilePage from './profile-page';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends Component {

  componentDidMount() {
    console.log(this.props);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 8267;
    }

    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <ProfilePage {...this.props} profile={this.props.profile} />
    )
  }
};

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile}),
  withRouter
)(ProfileContainer);
