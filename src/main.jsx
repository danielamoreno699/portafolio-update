import React from 'react';

import {createRoot} from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store.js';
import './index.css';
import App from './App.jsx';
import { ProjectDataProvider } from './context/contextManager.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProjectDataProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </ProjectDataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
