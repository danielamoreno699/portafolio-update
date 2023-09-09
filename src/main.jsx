import React from 'react';
import ReactDOM from 'react-dom';


import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store.js';
import './index.css';
import App from './App.jsx';
import { ProjectDataProvider } from './context/contextManager.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <ProjectDataProvider>
      <Provider store={store}>
        <App />
      </Provider>
      </ProjectDataProvider>
   </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
