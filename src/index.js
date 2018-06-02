import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import state from './state';

const {products} = state;


ReactDOM.render(
  <App products = {products} />,
  document.getElementById('root')
);
