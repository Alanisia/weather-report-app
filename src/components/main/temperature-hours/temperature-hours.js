import React from "react";
import './temperature-hours.css';

export default class TemperatureHours extends React.Component {
    render() {
        let hours = this.props.weatherHours;
        return (
            <div>
                <ul className="hours">
                    {hours.map((v, i) => {
                        <li>
                            <div className="hours">
                                <p>{v.hour}</p>
                                <p>{v.tem}</p>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}