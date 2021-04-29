import React from 'react';
import Axios from 'axios';
import TemperatureHead from './temperature-head/temperature-head';

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
    const cityId = 101280101; // DEBUG & TEST
    Axios.get(`http://127.0.0.1:9202/api/cityInfo?cityId=${cityId}`).then(res => {
      const weatherInfo = res.data;
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
        weather: weatherInfo.weather,
        highest: 27,
        lowest: 20,
        airQuality: 'good',
        temperature: 21,
      };
      return (
        <div>
          <TemperatureHead temp={t} />
        </div>
      );
    }
  }
}