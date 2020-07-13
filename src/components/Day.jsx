import React from 'react';
import convertKelvinToCelsius from '../util/convertKelvinToCelsius'
import '../css/day.css'

const Day = ({props}) => {
    const windDirection = (deg) => {
        switch (true){
            case deg >= 0 | 360:
                return 'North'
            case deg > 0 && deg < 90:
                return 'Northeast'
            case deg === 90:
                return 'East'
            case deg > 90 && deg < 180:
                return 'Southeast'
            case deg === 180:
                return 'South'
            case deg > 180 && deg < 270:
                return 'Southwest'
            case deg === 270:
                return 'West'
            case deg > 270:
                return 'Northwest'
            default:
                return 'North'
        }
    }

    const main = props.main
    const weather = props.weather[0]
    const image = `https://openweathermap.org/img/wn/${weather.icon}.png`
    const wind = props.wind
    const windOrientation = windDirection(wind.deg)
    return(
        <section className="day">
            <div className="dayContainer">
                <div className="day__name">
                    <span>Lunes</span>
                </div>
                <div className="day__container">
                    <img src={image} alt="day" className="day__container--image"/>
                </div>
                <div className="day__description">
                    <span className="day__description--span">{convertKelvinToCelsius(main.temp)}</span>
                </div>
            </div>
        </section>
    );
};

export default Day;