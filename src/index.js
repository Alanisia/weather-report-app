/**
 * @author 3118004765
 */ 
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import * as Keys from './components/city/city-common';
import './components/App.css';

let list = localStorage.getItem(Keys.default.currentListKey);
if (list === undefined || list === null || list === [] || list === "") {
  localStorage.setItem(Keys.default.currentListKey, JSON.stringify([]));
  alert("请添加城市！");
}

let caches = localStorage.getItem(Keys.default.cityCache);
if (caches === undefined || caches === null || caches === [] || caches === "")
  localStorage.setItem(Keys.default.cityCache, JSON.stringify([]));

ReactDom.render(<App />, document.getElementById("root"));
