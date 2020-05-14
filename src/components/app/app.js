import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import { ProfilePage, DialogPage } from '../pages';

function App(props) {
  // console.log(props);

  return (
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Route
            path="/profile"
            render={ () =>
              <ProfilePage store={props} />}
          />
          <Route
            path="/dialogs"
            render={ () =>
              <DialogPage store={props} />}
          />
        </main>
      </div>
  );
}

export default App;
