import React from "react";
import { Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutmeCss from "./Aboutme.module.css"
const Aboutme = () => {
  return (
    <div>

      <Carousel className = {AboutmeCss.carousel} showThumbs={false} showArrows={false}>
        <div className = {AboutmeCss.page1}>

          <div>
            Hello
          </div>
          
        </div>
        <div >
          <img
            className = {AboutmeCss.image}
            alt=""
            src="https://img.freepik.com/free-vector/watercolor-stains-abstract-background_23-2149107181.jpg?w=2000"
          />
          
        </div>
      </Carousel>
    </div>
  );
};

export default Aboutme;
