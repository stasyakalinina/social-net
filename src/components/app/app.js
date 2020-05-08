import React from 'react';
import {Route} from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import { ProfilePage, DialogPage } from '../pages';

function App({ data }) {

  return (
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Route path="/profile" render={ () => <ProfilePage data={data.profilePage} />} />
          <Route path="/dialogs" render={ () => <DialogPage data={data.dialogPage} />} />
        </main>
      </div>
  );
}

export default App;
