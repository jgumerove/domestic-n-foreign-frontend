import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './components/App'
import { countriesReducer } from './reducers/countriesReducer'
import {BrowserRouter as Router} from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(countriesReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
      <Provider store={store}>
        <Router>
           <App />
        </Router>
      </Provider>,
       document.getElementById('root')
  );
  