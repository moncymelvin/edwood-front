import React from "react";
import UseStyles from "./UseStyles";

const Banner = () => {
  const classes = UseStyles();
  return (
    <header id="header">
      <div class="intro">
        <div class="overlay">
          <div class="container">
            <div class="row">
              <div class="intro-text">
                <img src="logo.png" className={classes.logo}/>
                <p>We design your home.</p>
                <a href="#about" class="btn btn-custom btn-lg page-scroll">
                  Our Furnitures
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
