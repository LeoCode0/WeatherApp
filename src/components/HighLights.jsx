import React from "react";
import convertKelvinToCelsius from "../util/convertKelvinToCelsius";
import "../css/table.css";

const Highlights = ({ props }) => {
  const main = props.main;
  const coord = props.coord;
  return (
    <React.Fragment>
    <h1>Highlights</h1>
      {/* <h1 className="table__title--h1 center">{props.name}</h1>
      <div className="table">
        <div className="table__names">
          <span className="table__names--span center">Temperature</span>
          <span className="table__names--span center">Feels like</span>
          <span className="table__names--span center">humidity</span>
          <span className="table__names--span center">coordinates</span>
          <span className="table__names--span center">coordinates</span>
        </div>
        <div className="table__values">
          <span className="table__values--span center">
            {convertKelvinToCelsius(main.temp)}
          </span>
          <span className="table__values--span center">
            {convertKelvinToCelsius(main.feels_like)}
          </span>
          <span className="table__values--span center">{main.humidity}%</span>
          <span className="table__values--span center">
            Longitude: {coord.lon}
          </span>
          <span className="table__values--span center">
            Latitude: {coord.lat}
          </span>
        </div>
      </div> */}
    </React.Fragment>
  );
};

export default Highlights;
