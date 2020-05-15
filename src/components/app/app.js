import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import { ProfilePage, DialogPage, UsersPage } from '../pages';

function App(props) {

  return (
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Route
            path="/profile"
           component={ProfilePage}
          />
          <Route
            path="/dialogs"
            component={DialogPage}
          />
          <Route
            path="/users"
            component={UsersPage}
          />
        </main>
      </div>
  );
}

export default App;
