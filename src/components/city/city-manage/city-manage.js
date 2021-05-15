import React from 'react';
import './city-manage.css';
import * as Svg from '../../svg-icon/svg-icon';
const svg = Svg.default;

export default class CityManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: localStorage.getItem("current-city-list")
    };
  }
  render() {
    return (
      <div>
        <h2>城市列表</h2>
        <ul>
          {this.state.cityList && this.state.cityList.map((v, i) => {
            <li key={i}>{v}<span className="del"><svg.SvgIcon svg={svg.svgs.x}/></span></li>
          })}
        </ul>
      </div>
    )
  }
}