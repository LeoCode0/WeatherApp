import React from "react";
import convertKelvinToCelsius from "../util/convertKelvinToCelsius";
import Time from "../util/time";

import "../css/currentDay.css";

const CurrentDay = (props) => {
  const day = Time();
  const weather = props.props.weather;
  const temp = convertKelvinToCelsius(props.props.main.temp);
  const name = props.props.name;
  const image = `https://openweathermap.org/img/wn/${weather[0].icon}.png`;
  let weatherSecondary;
  let weatherSecondaryDesc;
  let weatherSecondaryImg;

  if (weather[1] !== undefined) {
    weatherSecondary = weather[1];
    weatherSecondaryImg = `https://openweathermap.org/img/wn/${weatherSecondary.icon}.png`;
    weatherSecondaryDesc = weatherSecondary.description;
  } else {
    weatherSecondary = "";
    weatherSecondaryImg = "";
    weatherSecondaryDesc = "";
  }

  return (
    <section className="currentDay">
      <form
        className="currentDay__form"
        onSubmit={(e) => props.clickHandler(e)}
      >
        <input
          type="text"
          className="currentDay__form--input"
          placeholder="Search City"
          aria-label="Write city name"
          onChange={(e) => props.handleChange(e)}
        />
        <button
          className="currentDay__form--button"
          type="submit"
          aria-label="search"
        >
          <i className="fas fa-search " aria-hidden="true"></i>
        </button>
      </form>
      <div className="currentDay__imageContainer">
        <img
          src={image}
          alt="Current weather"
          className="currentDay__imageContainer--image"
        />
      </div>
      <div className="currentDay__temp">
        <h1 className="currentDay__temp--grades">{temp} </h1>
        <span className="currentDay__temp--unit">°C</span>
      </div>
      <div className="currentDay__details">
        <span className="currentDay__details--day">{day.name}, </span>
        <span className="currentDay__details--hour">
          {day.date.getHours()}:{day.date.getMinutes()}
        </span>
      </div>
      <div className="currentDay__weather">
        <div className="currentDay__weather--icon">
          <img src={image} alt={weather[0].description} />
          <img src={weatherSecondaryImg} alt={weatherSecondaryDesc} />
        </div>
        <div className="currentDay__weather--description">
          <p>{weather[0].description}</p>
          <p>{weatherSecondaryDesc}</p>
        </div>
      </div>
      <section className="icons">
        <div className="">
          <i
            className="fas fa-crosshairs currentDay__form--icon"
            onClick={props.handleLocation}
          ></i>
          <span>Ubication</span>
        </div>
        <div className="">
          <i
            className="fas fa-comment-alt"
            onClick={props.handleNotification}
          ></i>
          <span>Notifications</span>
        </div>
      </section>
      <div className="currentDay__name">
        <span className="currentDay__name--span">{name}</span>
      </div>
    </section>
  );
};

export default CurrentDay;
