import React from "react";

export default class Temperature7Days extends React.Component {
    render() {
        let sevenDays = this.props.weather7Days;
        return (
            <div>
                <ul className="days-list">
                    {details.map((i, v) => {
                        <li>
                            <span className="week">{v.week}</span>
                            <span className="wimg"></span>
                            <span className="temp">
                                <span className="hg">{v.highest}</span>&nbsp;
                                <span className="lw">{v.lowest}</span>
                            </span>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}