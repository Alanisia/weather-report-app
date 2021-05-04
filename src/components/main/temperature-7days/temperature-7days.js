import React from "react";
import './temperature-7days.css';

export default class Temperature7Days extends React.Component {
    render() {
        let sevenDays = this.props.weather7Days;
        console.log(sevenDays);
        return (
            <div>
                <ul className="days-list">
                    {sevenDays.map((v, i) => 
                        <li key={i}>
                            <span className="week">{v.week}</span>
                            <span className="wimg"></span>
                            <span className="temp">
                                <span className="hg">{v.highest}</span>&nbsp;
                                <span className="lw">{v.lowest}</span>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}