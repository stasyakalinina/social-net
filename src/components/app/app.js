import React from 'react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import './app.css';
import Profile from '../profile/profile';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <main className="app__content">
        <Profile />
      </main>
    </div>
  );
}

export default App;
