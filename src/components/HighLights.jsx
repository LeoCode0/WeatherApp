import React from "react";
import convertKelvinToCelsius from "../util/convertKelvinToCelsius";

const Highlights = () => {
  return (
    <section className="highlights">
      <div className="highlights__card">
        <p>Test</p>
        <p>Another Text</p>
      </div>
      <div className="highlights__card">
        <p>Wind status</p>
        <p>Desc</p>
        <i>Icon</i>
      </div>
      <div className="highlights__card">
        <span>Sunrise sunset</span>
        <p>Sunrise</p>
        <p>Sunset</p>
      </div>
      <div className="highlights__card">
        <h3>humidity</h3>
        <p>value</p>
        <div className="graphic"></div>
      </div>
      <div className="highlights__card">
        <p>visibility</p>
        <span>value</span>
      </div>
      <div className="highlights__card">
        <p>Air quality</p>
        <p>value</p>
        <div className="graphic"></div>
      </div>
    </section>
  );
};

export default Highlights;
