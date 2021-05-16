import React from "react";
import * as Icon from '../weather-icon';
import './temperature-7days.css';

export default class Temperature7Days extends React.Component {
  render() {
    let sevenDays = this.props.weather7Days;
    return (
      <div>
        <ul className="days-list">
          {sevenDays.map((v, i) =>
            <li key={i}>
              <span className="week">{v.week}</span>
              <span className="wimg">
              {Icon.default.getWeekWeather(v.wea).map(v => {
                return v;
              })}
              </span>
              <span className="temp">
                <span className="hg">{v.highest}</span>&nbsp;
                <span className="lw">{v.lowest}</span>
              </span>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
