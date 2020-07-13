import React from "react";
import '../css/currentDay.css';

const CurrentDay = () => {
  return (
    <section className="currentDay">
      <form className="currentDay__form">
        <i className="currentDay__form--icon">Icon</i>
        <input
          type="text"
          className="currentDay__form--input"
          placeholder="Search City"
        />
        <input
          type="submit"
          className="currentDay__form--button"
          value="Search"
        />
      </form>
      <div className="currentDay__imageContainer">
        <img
          src="https://picsum.photos/350"
          alt="Current weather"
          className="currentDay__imageContainer--image"
        />
      </div>
      <div className="currentDay__temp">
          <h1 className="currentDay__temp--grades">12 </h1>
          <span className="currentDay__temp--unit">°C</span>
      </div>
      <div className="currentDay__details">
        <span className="currentDay__details--day">Monday, </span>
        <span className="currentDay__details--hour">16:00</span>
      </div>
      <div className="currentDay__weather">
        <div className="currentDay__weather--icon">
          <i>Icon</i>
          <i>Icon2</i>
        </div>
        <div className="currentDay__weather--description">
          <p>Text 1</p>
          <p>Text 2</p>
        </div>
      </div>
      <div className="currentDay__name">
        <span className="currentDay__name--span">Xicotepec de Juarez</span>
      </div>
    </section>
  );
};

export default CurrentDay;
