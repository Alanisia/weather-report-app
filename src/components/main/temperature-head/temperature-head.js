import React from 'react';
import './temperature-head.css';

export default class TemperatureHead extends React.Component {
  render() {
    let temp = this.props.temp;
    return (
      <div>
        <div className="tempdiv">
          <h4>{temp.city}</h4>
          <h2 className="temperature">{temp.temperature}</h2>
          <p className="weather"><strong>{temp.weather}</strong></p>
          <p className="weathers">
            <span className="highest">{temp.highest}</span>/
            <span className="lowest">{temp.lowest}</span>
          </p>
          <span className="air-quality">
            空气指数：<span>{temp.air}</span>&nbsp;
            空气质量：<span>{temp.airQuality}</span>
          </span>
        </div>
      </div>
    );
  }
}
