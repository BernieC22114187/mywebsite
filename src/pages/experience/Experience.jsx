import { OptionUnstyled } from "@mui/base";
import { flexbox } from "@mui/system";
import React, { useState } from "react";

import ExperienceCss from "./Experience.module.css";
const blueBubbleText = [];
blueBubbleText.push(
  <div>
    <div
      style={{
        marginRight: "3vw",
        marginBottom: "3vh",
        fontSize: "4.688vw",
        fontFamily: "PT Serif",
        fontStyle: "italic",
        fontWeight: "700",
      }}
    >
      Bernie Chen
    </div>
    <div
      style={{
        marginRight: "5vw",
        marginBottom: "15vh",
        fontSize: "2.288vw",
        fontFamily: "Lusitana",
        fontWeight: "700",
      }}
    >
      Coding Experience
    </div>
  </div>
);
blueBubbleText.push(
  <div>
    <div
      style={{
        marginRight: "1vw",
        fontSize: "2.688vw",
        fontFamily: "PT Serif",
        fontWeight: "700",
      }}
    >
      &#x2190; Back{" "}
    </div>
  </div>
);

const Experience = () => {
  const [isOpen, setIsOpen] = useState([false, true]);
  return (
    <div className={ExperienceCss.wholepage}>
      <div className={ExperienceCss.background}>
        <div
          style={{
            position: "absolute",
            width: "10vw",
            height: "10vw",
            left: "10.37vw",
            top: "2vh",
          }}
          className={ExperienceCss.backgroundBubble}
        ></div>
      </div>
      <div className={ExperienceCss.mainContent}>
        <span
          style={{
            width: "46.66vw",
            height: "46.66vw",
            left: "0px",
            top: "30vh",
          }}
          className={
            isOpen[0] ? ExperienceCss.fullBubble : ExperienceCss.bubble
          }
          onClick={() => {
            setIsOpen([!isOpen[0], isOpen[1]]);
          }}
        >
          {isOpen[0]
            ? 
              blueBubbleText[0]
            : blueBubbleText[1]}
        </span>
      </div>
    </div>
  );
};

export default Experience;
