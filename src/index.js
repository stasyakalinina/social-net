import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import store from './store';
import { StoreProvider } from './store-context/store-context';

export const renderEntireTree = (state) => {

  ReactDOM.render(
    <React.StrictMode>
      <StoreProvider value={store}>
        <Router>
          <App state={state} dispatch={store.dispatch.bind(store)} />
        </Router>
      </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
  );
};


renderEntireTree(store.getState());
store.subscribe(() => {
  renderEntireTree(store.getState())
});
