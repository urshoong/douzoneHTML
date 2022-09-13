import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStoreHook, Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import App from './App';

// const store = createStoreHook(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(ReduxThunk, logger))
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider store={store}>
    <App />
  // </Provider>
);
