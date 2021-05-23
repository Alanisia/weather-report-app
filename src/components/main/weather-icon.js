import React from 'react';
import * as Svg from '../svg-icon/svg-icon';
const svgs = Svg.default;

export default {
  _weather: [
    {name: "晴", night: false, icon: <svgs.SvgIcon svg={svgs.svgs.sun}/>},
    {name: "多云", night: false, icon: <svgs.SvgIcon svg={svgs.svgs.cloudSun}/>},
    {name: "晴", night: true, icon: <svgs.SvgIcon svg={svgs.svgs.moon}/>},
    {name: "多云", night: true, icon: <svgs.SvgIcon svg={svgs.svgs.cloudMoon}/>},
    {name: "阴", icon: <svgs.SvgIcon svg={svgs.svgs.cloud}/>},
    {name: "雾", icon: <svgs.SvgIcon svg={svgs.svgs.cloudFog}/>},
    {name: "霾", icon: <svgs.SvgIcon svg={svgs.svgs.cloudHaze}/>},
    {name: "霰", icon: <svgs.SvgIcon svg={svgs.svgs.cloudSleet}/>},
    {name: "雪", icon: <svgs.SvgIcon svg={svgs.svgs.cloudSnow}/>},
    {name: "小雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudDrizzle}/>},
    {name: "中雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudRain}/>},
    {name: "大雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudRainHeavy}/>},
    {name: "雷阵雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudLightningRain}/>},
    {name: "冰雹", icon: <svgs.SvgIcon svg={svgs.svgs.cloudHail}/>},
  ],
  getWeather: function(name, isNight) {
    for (let w of this._weather) {
      if (w.name === name) {
        if (w.night !== undefined) {
          if (w.night === isNight) 
            return w.icon;
        } else return w.icon;
      }
    }
    return null;
  },
  isNight: function(time) {
    let hour = parseInt(time.substring(0, 2));
    return !(hour >= 6 && hour <= 18);
  },
  getWeekWeather: function(name) {
    let result = [];
    let weas = name.split('转');
    for (let w of weas) {
      for (let i of this._weather) {
        if (i.name === w) {
          result.push(i.icon);
          break;
        }
      }
    }
    return result;
  }
}