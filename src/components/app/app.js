import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import { ProfilePage, DialogPage } from '../pages';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Sidebar />
        <main className="app__content">
          <Route path="/profile" component={ProfilePage} />
          <Route path="/dialogs" component={DialogPage} />
        </main>
      </div>
    </Router>
  );
}

export default App;
