import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserProfile } from '../../../store/profile/actions';
import ProfilePage from './profile-page';
import { withRouter } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';


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

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));