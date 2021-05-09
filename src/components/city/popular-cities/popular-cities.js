import React from 'react';
import Data from './popular-cities.json';
import './popular-cities.css';

export default class PopularCities extends React.Component {
  render() {
    const cities = Data['popular-cities'];
    let generateTable = () => {
      let str = '', flag = false;
      for (let i = 0; i < cities.length; i++) {
        if ((i + 1) % 5 === 1) {
          str += '<tr>';
          flag = true;
        }
        str += `<td>${cities[i]}</td>`;
        if ((i + 1) % 5 === 0) {
          str += '</tr>';
          flag = false;
        }
      }
      if (flag) str += '</tr>';
      console.log(str);
      return str;
    };
    return (
      <div>
        <h4>热门城市</h4>
        <table>
          <tbody dangerouslySetInnerHTML={{ __html: generateTable() }}>
          </tbody>
        </table>
      </div>
    )
  }
}