import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import { DialogPage, UsersPage, LoginPage } from '../pages';
import ProfileContainer from '../pages/profile-page/profile-page-container';

function App(props) {

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

export default App;
