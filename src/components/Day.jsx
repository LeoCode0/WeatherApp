import React from "react";
import GraphicWeather from './GraphicWeather';

const Day = (props) => {
    const date = props.date
    const weatherDay = props.list
    return (
        <div className="Day">
            <span>{date}</span>
            <GraphicWeather props={weatherDay} />
            <button>View Day</button>
        </div>
    );
};

export default Day;
