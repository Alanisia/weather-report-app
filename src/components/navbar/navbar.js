import React from "react";
import * as Svg from "../svg-icon/svg-icon";
import { Link } from "react-router-dom";
import './navbar.css';

export default class Navbar extends React.Component {
  render() {
    const svg = Svg.default;
    return (
      <div className="navbar">
        <p>
          <Link to="/">
            <span id="nav-main" className="nav-main">
              <svg.SvgIcon svg={svg.svgs.house}/>
            </span>
          </Link> 
          <span className="nav-city">
            <Link to="/city-select">
              <span id="nav-city-select">
                <svg.SvgIcon svg={svg.svgs.list} />
              </span>
            </Link>
            <Link to="/city-manage">
              <span id="nav-city-manage">
                <svg.SvgIcon svg={svg.svgs.gearFill} />
              </span> 
            </Link>
          </span>
        </p>
      </div>
    )
  }
}