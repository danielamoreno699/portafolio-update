import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store.js';
import './index.css';
import App from './App.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
