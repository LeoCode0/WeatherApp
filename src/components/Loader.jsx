import React from "react";

import '../css/loader.css'

const Loader = () => {
  return (
      <div className="contain">
        <div className="loader">
            <div className="rect1"></div>
            <div className="rect2"></div>
            <div className="rect3"></div>
            <div className="rect4"></div>
            <div className="rect5"></div>
        </div>
        <h1>Loading</h1>
      </div>
  );
};

export default Loader;
