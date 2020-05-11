import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import store from './services/mock-service';

export const renderEntireTree = (data) => {
  ReactDOM.render(
    <React.StrictMode>
      <Router>
        <App data={data} dispatch={store.dispatch.bind(store)} />
      </Router>
    </React.StrictMode>,
    document.getElementById('root')
  );
};


renderEntireTree(store.getData());
store.subscribe(renderEntireTree);
