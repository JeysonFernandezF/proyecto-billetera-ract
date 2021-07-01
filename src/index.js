import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import logger from 'redux-logger';

import reducer from './reducers';

import "core-js/stable";
import "regenerator-runtime/runtime";
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './routes/App';


const initialState = {
  sectionActive: "SingIn",
  pageSection: "Billetera",
  billeteraActiva: {
    'id': 0,
    'nombre': 'Nueva Billetera',
    'monto': 0,
  },
  actualizarIndex: 0,
  
}

//const composeEnhanders = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middlewares)
  )
)

ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);


