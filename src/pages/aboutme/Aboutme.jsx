import React from "react";
import { Container } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutmeCss from "./Aboutme.module.css";

import img1 from "../../components/images/editedEdu.png";
import img2 from "../../components/images/HobbiesandInterests.png";
import img3 from "../../components/images/editedTaipei.png";
import img4 from "../../components/images/deskImage.png";

const Aboutme = () => {
  return (
    <div className={AboutmeCss.wholepage}>
      <Carousel className={AboutmeCss.carousel} showThumbs={false}>
        <div className={AboutmeCss.wrapper}>
          <img src={img1} className={AboutmeCss.image} />
          <div className={AboutmeCss.eduSection}>
            <div className={AboutmeCss.eduTitle}>Education</div>
            <div className={AboutmeCss.eduDescription}>
              2022 August - Present: Biomedical Engineering degree @ Duke
              University - Class of 2026
              <br />
              <br />
              2014 August - 2022 May: Middle/High school student @ Taipei
              American School
              <br />
              <br />
              2010 September - 2014 June: Elementary school student @ Taipei
              Fuhsing Private School
            </div>
          </div>
        </div>
        <div className={AboutmeCss.wrapper}>
          <img src={img2} className={AboutmeCss.image} />
          <div className={AboutmeCss.hobbySection}>
            <div className={AboutmeCss.hobbyTitle}>Hobbies and Interests</div>
            <div className={AboutmeCss.hobbyDescription}>
              Playing and watching sports: tennis, baseball, basketball,
              swimming
              <br />
              <br />
              Listening, playing, and composing music (wide range of genres,
              from electronic to classical)
              <br />
              <br />
              Watching competitive sports & &nbsp;
              <span className={AboutmeCss.esports}>Esports</span> (Rafael Nadal,
              LA Angels, and T1 fan)
            </div>
          </div>
        </div>
        <div className = {AboutmeCss.wrapper}>
          <img src={img3} className={AboutmeCss.image} />
          <div className={AboutmeCss.moreSection}>
            <div className={AboutmeCss.moreTitle}>More About me</div>
            <div className={AboutmeCss.moreDescription}>
              Born in Los Angeles, California
              <br />
              <br />
              Lived in Taipei, Taiwan till 12th grade
              <br />
              <br />
              Have a brother 5 years older
              <br />
              <br />
              Fluent in Mandarin, can read Ancient Greek and Latin texts
            </div>
          </div>
        </div>
        <div className = {AboutmeCss.wrapper}>
          <img src={img4} className={AboutmeCss.image} />
          <div className={AboutmeCss.contactSection}>
            <div className={AboutmeCss.contactTitle}>CONTACT ME</div>
            <div className={AboutmeCss.contactDescription}>
            School Email: bernie.chen@duke.edu
              <br />
              <br />
              Personal Email: bernie0716@gmail.com
              <br />
              <br />
              Phone: (+886) 921-081-823
              <br />
              <br />
              Linkedin: <a className ={AboutmeCss.linkedin}href="https://www.linkedin.com/in/bernie-chen-244713235">www.linkedin.com/in/bernie-chen-244713235</a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Aboutme;
