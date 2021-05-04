import React from "react";
import './temperature-details.css';

export default class TemperatureDetails extends React.Component {
  render() {
    let details = this.props.weatherDetails;
    return (
      <div>
        <p className="details-sun">
          <span>日出： {details.sunrise}</span>
          <span className="details-sunset">日落： {details.sunset}</span>
        </p>
        <dd className="details-list">
          <dl>
            <span>风级</span>
            <span className="details-value">{details.windSpeed}</span>
          </dl>
          <dl>
            <span>风速</span>
            <span className="details-value">{details.windMeter}</span>
          </dl>
          <dl>
            <span>风向</span>
            <span className="details-value">
              {details.wind.map((v, i) => <span key={i}>{v} </span>)}
            </span>
          </dl>
        </dd>
        <dd className="details-list">
          <dl>
            <span>湿度</span>
            <span className="details-value">{details.humidity}</span>
          </dl>
          <dl>
            <span>气压</span>
            <span className="details-value">{details.pressure}</span>
          </dl>
        </dd>
        <dd className="details-list">
          <dl>
            <span>空气指数</span>
            <span className="details-value">{details.air}</span>
          </dl>
          <dl>
            <span>空气质量</span>
            <span className="details-value">{details.airQuality}</span>
          </dl>
          <dl>
            <span>能见度</span>
            <span className="details-value">{details.visibility}</span>
          </dl>
          <p className="details-air-tip">{details.airTip}</p>
        </dd>
      </div>
    );
  }
}
