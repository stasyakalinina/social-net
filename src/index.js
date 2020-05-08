import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app/app';
import MockService from './services/mock-service';

const Service = new MockService();
const { data } = Service;

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App data={data}/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
