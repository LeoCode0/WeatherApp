import React from "react";

const CurrentDay = () => {
  return (
    <section className="currentDay">
      <form className="currentDay__form">
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
          src="/"
          alt="Current weather"
          className="currentDay__imageContainer--image"
        />
      </div>
      <h1 className="currentDay__temp">12 C</h1>
      <div className="currentDay__details">
        <span className="currentDay__details--day">Monday, </span>
        <span className="currentDay__details--Hour">16:00</span>
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
      <span className="currentDay__name">Xicotepec de Juarez</span>
    </section>
  );
};

export default CurrentDay;
