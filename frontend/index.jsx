import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
  // let store;
  // if (window.currentUser) {
  //   const preloadedState = { session: { currentUser: window.currentUser } };
  //   store = configureStore(preloadedState);
  //   // Clean up after ourselves so we don't accidentally use the
  //   // global currentUser instead of the one in the store
  //   delete window.currentUser;
  //
  // } else {
  //   store = configureStore();
  // }
  //
  // window.store = store;

  const root = document.getElementById('root');
  ReactDOM.render(<App />, root);
});
