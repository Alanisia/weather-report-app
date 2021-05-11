import React from 'react';
import Main from './main/main';
import CitySelect from "./city/city-select/city-select";
import CityManage from './city/city-manage/city-manage';
import Navbar from './navbar/navbar';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={Main} />
        <Route path="/city-select" exact component={CitySelect} />
        <Route path="/city-manage" exact component={CityManage} />
        <Route component={Navbar} />
      </Router>
    );
  }
}