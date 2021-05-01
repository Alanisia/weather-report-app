module.exports = {
  _cityInfoURL: 'http://www.weather.com.cn/data/cityinfo/', //'101280101.html';
  _weatherDataURL: 'http://www.weather.com.cn/data/sk/', // '101280101.html';
  _fifteenDaysURL: 'http://t.weather.itboy.net/api/weather/city/', //'101280101';
  _muxiaoguoURL: 'https://api.muxiaoguo.cn/api/tianqi',
  _tianqiapiURL: 'https://v0.yiketianqi.com/api?version=v9&appid=93621245&appsecret=CXViec1Z',
  getCityInfoURL: function(city) {
    return this._cityInfoURL + city + '.html';
  },
  getWeatherDataURL: function(city) {
    return this._weatherDataURL + city + '.html';
  },
  get15DaysURL: function(city) {
    return this._fifteenDaysURL + city;
  },
  getMuxiaoguoURL: function(city, type) {
    return this._muxiaoguoURL + '?city=' + city + '&type=' + type;
  },
  getTianqiapiURL: function(cityid) {
    return this._tianqiapiURL + '&cityid=' + cityid;
  }
};
