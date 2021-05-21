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
      let temp = this.state.cityList, tempc = this.state.current;
      let city = e.target.parentNode.parentNode.attributes['cityval'].nodeValue;
      console.log(city);
      let newList = [], newCurrent = this.state.current;
      for (let c of temp) {
        if (city !== c) newList.push(c);
      }
      if (!newList.includes(newCurrent)) {
        newCurrent = newList.length > 0 ? newList[0] : null;
      }
      console.log(newList, newCurrent);
      localStorage.setItem(Common.default.currentKey, newCurrent);
      localStorage.setItem(Common.default.currentListKey, JSON.stringify(newList));
      this.setState({ cityList: newList, current: newCurrent }, () => {
        if (this.state.current !== tempc) this.forceUpdate();
        else this.render();
      });
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
              <span className="del" cityval={v} onClick={e => deleteCity(e)}><svg.SvgIcon svg={svg.svgs.x}/></span>
            </li>)
          })}
        </ul>
      </div>
    )
  }
}