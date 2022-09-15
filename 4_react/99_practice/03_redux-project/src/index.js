import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Provider컴포넌트를 사용하여 React App에 store를 연동
  <Provider store={ store }>
    <App />
  </Provider>
);

