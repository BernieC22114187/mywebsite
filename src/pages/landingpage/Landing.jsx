import React from "react";
import LandingCss from "./Landing.module.css";
const Landing = () => {
  window.scrollTo(0,0);
  return (
    <div className={LandingCss.wholepage}>
      <h1 className={LandingCss.intro}>Hello, I'm Bernie</h1>
      <h2 className={LandingCss.subtitle}>This is my coding portfolio</h2>
      <h2 className={LandingCss.credits}>Developed with ReactJS, HTML, and CSS</h2>
    </div>
  );
};

export default Landing;
