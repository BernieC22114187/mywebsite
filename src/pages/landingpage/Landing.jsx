import React from "react";
import LandingCss from "./Landing.module.css";
const Landing = () => {
  return (
    <div className={LandingCss.wholepage}>
      <h1 className={LandingCss.intro}>Hello, I'm Bernie</h1>
      <h2 className={LandingCss.subtitle}>This is my coding portfolio</h2>
      <h2 className={LandingCss.credits}>Developed with ReactJS</h2>
    </div>
  );
};

export default Landing;
