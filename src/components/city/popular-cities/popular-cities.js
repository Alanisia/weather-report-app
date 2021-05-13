import React from 'react';
import Data from './popular-cities.json';
import './popular-cities.css';

export default class PopularCities extends React.Component {
  addCity(e) {
    alert(e.target.innerHTML + "已经添加至城市列表");
  }
  render() {
    const cities = Data['popular-cities'];
    let generateTableJSX = () => {
      let citiesGroup = [], temp = [];
      for (let i = 0; i < cities.length; i++) {
        temp.push(cities[i]);
        if ((i + 1) % 5 === 0) {
          citiesGroup.push(temp); 
          temp = [];
        }
      }
      if (temp.length > 0) citiesGroup.push(temp);
      return (
        <tbody>
          {citiesGroup.map((row, i) => {
            return (<tr key={i}>
              {row.map((cell, index) => {
                return <td key={index} onClick={e => this.addCity(e)}>{cell}</td>
              })}
            </tr>)
          })}
        </tbody>
      )
    }
    return (
      <div>
        <h4>热门城市</h4>
        <table>
          {generateTableJSX()}
        </table>
      </div>
    )
  }
}