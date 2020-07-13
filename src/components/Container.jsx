import React from "react";

import '../css/container.css'
import Week from './Week'

const Container = () => {
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
        <Week />
      </div>
      <div className="container__highlights">
          <h1>Today's highlights</h1>
          <div className="container__highlights--grid">
                <div className="">1</div>
                <div className="">2</div>
                <div className="">3</div>
                <div className="">4</div>
                <div className="">5</div>
                <div className="">6</div>
          </div>
      </div>
    </section>
  );
};

export default Container;
