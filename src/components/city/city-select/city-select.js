import React from 'react';
import PopularCities from '../popular-cities/popular-cities';
import Data from '../city-code.json';
import './city-select.css';
import * as Common from '../city-common';

export default class CitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      province: null,
      city: null,
      county: null,
      provinceValues: Data.China.province,
      cityValues: null,
      countyValues: null,
    };
  }
  render() {
    const provinces = Data.China.province;
    let addCity = e => {
      let county = this.state.county;
      console.log(county);
      if (county !== null) {
        let cities = JSON.parse(localStorage.getItem(Common.default.currentListKey));
        if (!cities.includes(county)) {
          cities.push(county);
          localStorage.setItem(Common.default.currentListKey, JSON.stringify(cities));
          alert(`${county}已添加至城市列表`);
        } else {
          alert(`${county}已存在于城市列表`);
        }
      }
    };
    let selectProvince = e => {
      e.preventDefault();
      this.setState({ province: e.target.value }, () => {
        console.log(this.state.province);
        for (let p of this.state.provinceValues) {
          if (p['@name'] === this.state.province) {
            this.setState({ cityValues: p.city }, () => {
              console.log(this.state.cityValues);
              // PRE-TEST
              this.setState({
                countyValues: p.city[0].county, 
                county: p.city[0].county[0]['@name']
              })
            });
            break;
          }
        }
      });
    };
    let selectCity = e => {
      e.preventDefault();
      if (this.state.province !== null) {
        this.setState({ city: e.target.value }, () => {
          console.log(this.state.city);
          for (let p of this.state.cityValues) {
            if (p['@name'] === this.state.city) {
              this.setState({ countyValues: p.county }, () => {
                console.log(this.state.countyValues);
                this.setState({ county: this.state.countyValues[0]['@name']}, () => {});
              });
              break;
            }
          }
        });
      }
    };
    let selectCounty = e => {
      e.preventDefault();
      if (this.state.province !== null && this.state.city !== null) {
        this.setState({ county: e.target.value }, () => {
          console.log(this.state.county);
        });
      }
    };
    return (
      <div>
        <h2>城市选择</h2>
        <div>
          <form>
            <select onChange={e => selectProvince(e)}>
              {provinces.map((v, i) => {
                return <option key={i}>{v['@name']}</option>;
              })}
            </select>
            {
              this.state.cityValues &&
              <select onChange={e => selectCity(e)}>
                {this.state.cityValues.map((v, i) => {
                  return <option key={i}>{v['@name']}</option>
                })}
              </select>
            }
            {
              this.state.countyValues &&
              <select onChange={e => selectCounty(e)}>
                {this.state.countyValues.map((v, i) => {
                  return <option key={i}>{v['@name']}</option>
                })}
              </select>
            }
            <br />
            <button onClick={e => addCity(e)} className="add-city" type="button">添加城市</button>
          </form>
          <hr />
          <PopularCities />
        </div>
      </div>
    );
  }
}