import React from 'react';
import TemperatureHead from './temperature-head/temperature-head';
import TemperatureHours from './temperature-hours/temperature-hours';
import Temperature7Days from './temperature-7days/temperature-7days';
import TemperatureDetails from './temperature-details/temperature-details';
import * as Common from '../city/city-common';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherInfo: null,
      isLoaded: false,
      error: null,
    };
  }
  componentDidMount() {
    const _this = this;
    let city = localStorage.getItem(Common.default.currentKey);
    if (city === null || city === '') return;
    let cityId = Common.default.getApiID(city);
    let requestURL = `http://42.194.221.68:9202/api/tianqiapi?cityid=${cityId}`;
    fetch(requestURL).then(res => {
      return res.json();
    }).then(data => {
      const weatherInfo = data; 
      console.log(weatherInfo);
      _this.setState({
        weatherInfo: weatherInfo,
        isLoaded: true,
      });
    }).catch(e => {
      console.error(e);
      _this.setState({
        isLoaded: false,
        error: e,
      });
    });
  }
  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>;
    } else {
      let weatherInfo = this.state.weatherInfo;
      let t = {
        weather: weatherInfo.data[0].wea,
        temperature: weatherInfo.data[0].tem,
        highest: weatherInfo.data[0].tem1,
        lowest: weatherInfo.data[0].tem2,
        city: weatherInfo.city,
        updateTime: weatherInfo.update_time
      };
      let wh = (function () {
        let arr = [];
        for (let i = 0; i < weatherInfo.data[0].hours.length; i++) {
          arr.push({
            tem: weatherInfo.data[0].hours[i].tem,
            wea: weatherInfo.data[0].hours[i].wea,
            hour: weatherInfo.data[0].hours[i].hours
          });
        }
        return arr;
      })();
      let w7 = (function () {
        let arr = [];
        for (let i = 0; i < 7; i++) {
          arr.push({
            week: weatherInfo.data[i].week,
            wea: weatherInfo.data[i].wea,
            highest: weatherInfo.data[i].tem1,
            lowest: weatherInfo.data[i].tem2
          });
        }
        return arr;
      })();
      let wd = {
        air: weatherInfo.data[0].air,
        airQuality: weatherInfo.data[0].air_level,
        airTip: weatherInfo.data[0].air_tips,
        sunrise: weatherInfo.data[0].sunrise,
        sunset: weatherInfo.data[0].sunset,
        wind: weatherInfo.data[0].win,
        windSpeed: weatherInfo.data[0].win_speed,
        windMeter: weatherInfo.data[0].win_meter,
        pressure: weatherInfo.data[0].pressure,
        visibility: weatherInfo.data[0].visibility,
        humidity: weatherInfo.data[0].humidity,
        alarm: weatherInfo.data[0].alarm,
      };
      return (
        <div>
          <TemperatureHead temp={t} /><hr />
          <TemperatureHours weatherHours={wh} /><hr />
          <Temperature7Days weather7Days={w7} /><hr />
          <TemperatureDetails weatherDetails={wd} />
        </div>
      );
    }
  }
}