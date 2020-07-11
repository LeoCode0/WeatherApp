import React from 'react';
import convertKelvinToCelsius from '../util/convertKelvinToCelsius'
import '../css/graphicWeather.css'

const GraphicWeather = ({props}) => {
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
        <div className="weather">
            <div className="weather__container">
                <img src={image} alt="Weather" className="weather__container--image"/>
            </div>
            <div className="weather__description">
                <span className="weather__description--span">{weather.main}: </span>
                <span className="weather__description--span">{weather.description}</span>
                <span className="weather__description--span">{convertKelvinToCelsius(main.temp)}</span>
            </div>
            <div className="weather__wind">
                <p className="weather__wind--orientation">Wind direction: 
                    <span> {windOrientation} {wind.deg}° </span>
                </p>
                <p className="weather__wind--speed">Wind speed: 
                    <span> {wind.speed} m/s</span>
                </p>
            </div>
        </div>
    );
};

export default GraphicWeather;