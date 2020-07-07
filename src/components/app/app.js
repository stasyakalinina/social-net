import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { initialize } from '../../store/app/actions';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import { DialogPage, UsersPage, LoginPage } from '../pages';
import ProfileContainer from '../pages/profile-page/profile-page-container';
import '../../main.scss';
import './app.scss';
import { compose } from 'redux';
import Preloader from '../preloader/preloader';

class App extends Component {

  componentDidMount() {
    this.props.initialize();
  }

  render () {
    if (!this.props.initialize) {
      return <Preloader />
    }

    return (
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Route
            path="/profile/:userId?"
            component={ProfileContainer}
          />
          <Route
            path="/dialogs"
            component={DialogPage}
          />
          <Route
            path="/users"
            component={UsersPage}
          />
          <Route
            path="/login"
            component={LoginPage}
          />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialize: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize })
)(App);
