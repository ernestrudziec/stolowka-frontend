import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { BrowserRouter as Router } from 'react-router-dom';
import './scss/index.scss';

ReactDOM.render(
  <Router>
    <Root />
  </Router>,
  document.getElementById('root')
);
