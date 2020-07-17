import React from "react";

import Highlights from './HighLights'
import Week from './Week'

import '../css/container.css'

const Container = ({props}) => {
  const lat = props.coord.lat;
  const lon = props.coord.lon;
  return (
    <section className="container">
      <header className="container__header">
          <span className="container__header--week">
              Week
          </span>
          <span className="container__header--grades">
              °C
          </span>
      </header>
      <div className="container__week">
        <Week lat={lat} lon={lon}/>
      </div>
      <div className="container__highlights">
          <h1>Today's highlights</h1>
          <Highlights props={props}/>
      </div>
    </section>
  );
};

export default Container;
