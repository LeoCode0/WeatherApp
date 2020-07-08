import React from 'react';

import '../css/time.css';

const Time = () => {
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    const printDayName = (numberDay) => {
        return days[numberDay]
    }

    return(
        <div className="time">
            <div className="time__day">
                {printDayName(date.getDay())}
            </div>
            <div className="time__hour">
                Hour
            </div>
            <div className="time__hour--value">
                {date.toLocaleTimeString()}
            </div>
            <div className="time__date">
                Date
            </div>
            <div className="time__date--value">
                {date.toLocaleDateString()}
            </div>
        </div>
    );
};

export default Time;