import React from "react";

import '../css/loader.css'

const Loader = () => {
  return (
      <div className="contain">
        <div class="loader">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
        </div>
        <h1>Loading</h1>
      </div>
  );
};

export default Loader;
