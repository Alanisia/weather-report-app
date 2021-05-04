import React from "react";
import './temperature-hours.css';

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
                <p>{v.tem}</p>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}
