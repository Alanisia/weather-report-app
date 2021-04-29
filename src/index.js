import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import $ from 'jquery/dist/jquery';
import './App.css';

console.log($);
ReactDom.render(<App />, document.getElementById("root"));