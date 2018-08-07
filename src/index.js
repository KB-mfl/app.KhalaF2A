import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import preprocess from './preprocess'
import Auth from './Auth/layout'
// import registerServiceWorker from './registerServiceWorker';
preprocess().then(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
}).catch(() => {
  ReactDOM.render(<Auth />, document.getElementById('root'));
})

// registerServiceWorker();
