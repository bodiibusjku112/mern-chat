import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Chat from './Chat';
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider stor={store}>
      <Chat/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
