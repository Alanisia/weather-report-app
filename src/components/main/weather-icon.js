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
    {name: "细雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudDrizzle}/>},
    {name: "中雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudRain}/>},
    {name: "大雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudRainHeavy}/>},
    {name: "雷阵雨", icon: <svgs.SvgIcon svg={svgs.svgs.cloudLightningRain}/>},
    {name: "冰雹", icon: <svgs.SvgIcon svg={svgs.svgs.cloudHail}/>},
  ],
  getWeather: function(name, isNight) {
    for (let w of this._weather) {
      if (w.night)
        if (w.name === name && w.night === isNight) return w;
      else 
        if (w.name === name) return w;
    }
    return null;
  },
  isNight: function(time) {
    let hour = parseInt(time.split(':')[0]);
    return hour >= 6 && hour <= 18;
  }
}