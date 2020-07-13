import React from 'react';

import '../css/time.css';

const Time = () => {
    let date = new Date();
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const printDayName = (numberDay) => {
        return days[numberDay];
    };

    return(
        <div className="time">
            Current day
            {/* <div className="time__day center">
                {printDayName(date.getDay())}
            </div>
            <div className="time__hour center">
                Hour
            </div>
            <div className="time__hour--value center">
                {date.toLocaleTimeString()}
            </div>
            <div className="time__date center">
                Date
            </div>
            <div className="time__date--value center">
                {date.toLocaleDateString()}
            </div> */}
        </div>
    );
};

export default Time;