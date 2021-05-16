import React from "react";
import './temperature-hours.css';
import * as Icon from '../weather-icon';

export default class TemperatureHours extends React.Component {
  render() {
    let hours = this.props.weatherHours;
    return (
      <div>
        <ul className="hours-list">
          {hours.map((v, i) =>
            <li key={i}>
              <div className="hours">
                <p>{v.hour}</p>
                {Icon.default.getWeather(v.wea, Icon.default.isNight(v.hour))}<br/>
                <p>{v.tem}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
