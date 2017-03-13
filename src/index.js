import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import * as firebase from 'firebase';
// Initialize Firebase
var config = {
    apiKey: "API KEY",
    authDomain: "AUth Domain",
    databaseURL: "DB URL",
    storageBucket: "bucket",
    messagingSenderId: "sender id"
};
firebase.initializeApp(config);
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
