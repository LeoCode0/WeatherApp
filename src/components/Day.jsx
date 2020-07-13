import React from "react";
import convertKelvinToCelsius from "../util/convertKelvinToCelsius";
import "../css/day.css";

const Day = (props) => {
  
  const main = props.weather.main;
  const weather = props.weather.weather[0];
  const image = `https://openweathermap.org/img/wn/${weather.icon}.png`;
  const day = props.day.name;
  return (
    <section className="day">
      <div className="dayContainer">
        <div className="day__name">
          <span>{day}</span>
        </div>
        <div className="day__container">
          <img src={image} alt="day" className="day__container--image" />
        </div>
        <div className="day__description">
          <span className="day__description--span">
            {convertKelvinToCelsius(main.temp)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Day;
