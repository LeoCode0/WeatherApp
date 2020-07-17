import React from "react";

import '../css/highlights.css'

const Highlights = ({props}) => {
  const windDirection = (deg) => {
    switch (true) {
      case (deg >= 0) | 360:
        return "North";
      case deg > 0 && deg < 90:
        return "Northeast";
      case deg === 90:
        return "East";
      case deg > 90 && deg < 180:
        return "Southeast";
      case deg === 180:
        return "South";
      case deg > 180 && deg < 270:
        return "Southwest";
      case deg === 270:
        return "West";
      case deg > 270:
        return "Northwest";
      default:
        return "North";
    }
  };
  const wind = props.wind
  const windOrientation = windDirection(wind.deg);
  const humidity = props.main.humidity
  const visibility = (props.visibility / 1000).toFixed(1)
  const pressure = props.main.pressure
  const coordinates = props.coord

  let sunrise = new Date()
  sunrise.setTime(`${props.sys.sunrise}000`)

  let sunset = new Date()
  sunset.setTime(`${props.sys.sunset}000`)
  return (
    <section className="highlights">
      <div className="highlights__card">
        <h3 className="highlights__card--title">Wind status</h3>
        <i className="fas fa-wind highlights__card--icon wind"></i>
        <span className="highlights__card--value">{wind.speed} <span>km/h</span></span>
        <div className="highlights__card--description">
          <span> {windOrientation}</span>
        </div>
      </div>
      <div className="highlights__card">
        <h3 className="highlights__card--title">Coordinates</h3>
        <span className="highlights__card--value coordinates">Latitude: {coordinates.lat}</span>
        <span className="highlights__card--value coordinates">Longitude: {coordinates.lon}</span>
      </div>
      <div className="highlights__card">
        <h3 className="highlights__card--title">Sunrise & sunset</h3>
        <span className="highlights__card--value sun"> 
          <i className="fas fa-sun highlights__card--icon sunrise"></i>
          <i className="fas fa-arrow-up highlights__card--icon sunrise"></i>
          {sunrise.getHours()}:{sunrise.getMinutes()}
        </span>
        <span className="highlights__card--value sun">
          <i className="fas fa-sun highlights__card--icon sunrise"></i>
          <i className="fas fa-arrow-down highlights__card--icon sunrise"></i>
          {sunset.getHours()}:{sunset.getMinutes()}
        </span>
      </div>
      <div className="highlights__card">
        <h3 className="highlights__card--title">Humidity</h3>
        <i className="fas fa-water highlights__card--icon humidity"></i>
        <span className="highlights__card--value">{humidity} <span>%</span> </span>
        <div className="graphic"></div>
      </div>
      <div className="highlights__card">
        <h3 className="highlights__card--title">Visibility</h3>
        <i className="fas fa-eye highlights__card--icon visibility"></i>
        <span className="highlights__card--value">{visibility} <span>km</span></span>
      </div>
      <div className="highlights__card">
        <h3 className="highlights__card--title">Pressure</h3>
          <span className="highlights__card--value">{pressure} hPa</span>
        <div className="graphic"></div>
      </div>
    </section>
  );
};

export default Highlights;
