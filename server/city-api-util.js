module.exports = {
  _cityInfoURL: 'http://www.weather.com.cn/data/cityinfo/', //'101280101.html';
  _weatherDataURL: 'http://www.weather.com.cn/data/sk/', // '101280101.html';
  _fifteenDaysURL: 'http://t.weather.itboy.net/api/weather/city/', //'101280101';
  getCityInfoURL: function(city) {
    return this._cityInfoURL + city + '.html';
  },
  getWeatherDataURL: function(city) {
    return this._weatherDataURL + city + '.html';
  },
  get15DaysURL: function(city) {
    return this._fifteenDaysURL + city;
  }
};
