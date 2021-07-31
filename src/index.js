import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from './reducers/index'
import middleware from './middleware/index'
import { BrowserRouter } from 'react-router-dom';
let store = createStore(reducers, middleware)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
