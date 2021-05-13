import React from 'react';
import PopularCities from '../popular-cities/popular-cities';
import Data from '../city-code.json';
import './city-select.css';

export default class CitySelect extends React.Component {
  render() {
    const provinces = Data.China.province;
    return (
      <div>
        <h2>城市选择</h2>
        <div>
          {/* <form>
            <input placeholder="搜索城市..." type="text" name="city-name" id="city-select-input" />
            <button id="city-select-search-btn" type="button">搜索</button>
          </form> */}
          <form>
            <select>
              {provinces.map((v, i) => {
                <option key={i}>{v['@name']}</option>
              })}
            </select>
            <select></select>
            <select></select>
            <button onClick="">添加城市</button>
          </form>
          <hr />
          <PopularCities />
        </div>
      </div>
    );
  }
}