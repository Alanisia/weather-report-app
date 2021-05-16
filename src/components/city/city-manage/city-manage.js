import React from 'react';
import './city-manage.css';
import * as Svg from '../../svg-icon/svg-icon';
import * as Common from '../city-common';
const svg = Svg.default;

export default class CityManage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: localStorage.getItem(Common.default.currentKey),
      cityList: JSON.parse(localStorage.getItem(Common.default.currentListKey))
    };
  }
  render() {
    let deleteCity = e => {
      let temp = this.state.cityList;
      console.log(e);
      // this.setState()
    };
    let changeCurrent = e => {
      localStorage.setItem(Common.default.currentKey, e.target.innerHTML);
      this.setState({ current: localStorage.getItem(Common.default.currentKey) }, () => {
        console.log(this.state.current);
      });
    }
    return (
      <div>
        <h2>城市列表</h2>
        <ul className="city-manage-list">
          {this.state.cityList && this.state.cityList.map((v, i) => {
            return (<li key={i} className={v === this.state.current ? 'current' : ''}>
              <span className="city" onClick={e => changeCurrent(e)}>{v}</span>
              <span className="del" onClick={e => deleteCity(e)}><svg.SvgIcon svg={svg.svgs.x}/></span>
            </li>)
          })}
        </ul>
      </div>
    )
  }
}