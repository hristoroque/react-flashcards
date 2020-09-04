import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.css'
import store from './app/store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)