import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';
import { logAction, reportError } from './middlewares';
import './index.css';

const conposeEnhancers = compose(
  applyMiddleware(thunk, logAction, reportError)
);

const store = createStore(
  pokemonReducer,
  conposeEnhancers
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
