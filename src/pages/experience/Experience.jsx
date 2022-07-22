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
const orangeBubbleText = [];
orangeBubbleText.push(<div>
    <div
      style={{
        marginTop: "13vh",
        fontSize: "4vw",
        fontFamily: "PT Serif",
        
        fontWeight: "700",
      }}
    >
      Frontend Experience
    </div>
    <div
      style={{
        paddingTop: "5vh",
        fontSize: "1.2vw",
        fontFamily: "PT Serif",
        width: "40vw",
        fontWeight: "400",
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

</div>)
orangeBubbleText.push(<div>
    <div
      style={{
        
        fontSize: "2.5vw",
        fontFamily: "PT Serif",
        
        fontWeight: "700",
      }}
    >
      Frontend
    </div>
    <div
      style={{
        // marginRight: "5vw",
        marginTop: "1vh",
        fontSize: "1.5vw",
        fontFamily: "Lusitana",
        fontWeight: "700",
      }}
    >
      React Native <br/> HTML <br/> CSS <br/> Reactjs <br/>
    </div>
</div>);

const yellowBubbleText = [];
yellowBubbleText.push(<div>
    <div
      style={{
        
        fontSize: "3.8vw",
        fontFamily: "PT Serif",
        
        fontWeight: "700",
      }}
    >
      Backend Experience
    </div>
    <div
      style={{
        marginBottom: "14vh",
        paddingTop: "3vh",
        fontSize: "1.2vw",
        fontFamily: "PT Serif",
        width: "40vw",
        fontWeight: "400",
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

</div>)
yellowBubbleText.push(<div>
    <div
      style={{
        
        fontSize: "2.7vw",
        fontFamily: "PT Serif",
        
        fontWeight: "700",
      }}
    >
      Backend
    </div>
    <div
      style={{
        // marginRight: "5vw",
        marginTop: "1vh",
        
        fontSize: "1.8vw",
        fontFamily: "Lusitana",
        fontWeight: "700",
      }}
    >
      Fastapi <br/> Django <br/> MongoDB <br/> SQL <br/>
    </div>
</div>);
const brownBubbleText = [];
brownBubbleText.push(<div style ={{marginLeft: "1vw", display: "flex", flexDirection: "column", alignItems: "center",  textAlign: "right"}}>
    <div
      style={{
        
        fontSize: "4vw",
        fontFamily: "PT Serif",
        marginRight: "5vw",
        fontWeight: "700",
      }}
    >
      General Info
    </div>
    <div
      style={{
        marginBottom: "14vh",
        paddingTop: "3vh",
        fontSize: "1.2vw",
        fontFamily: "PT Serif",
        width: "25vw",
        marginRight: "10vw",
        fontWeight: "400",
      }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </div>

</div>)
brownBubbleText.push(<div>
    <div
      style={{
        
        fontSize: "3.5vw",
        fontFamily: "PT Serif",
        
        fontWeight: "700",
      }}
    >
      General
    </div>
    <div
      style={{
        // marginRight: "5vw",
        marginTop: "1vh",
        
        fontSize: "2vw",
        fontFamily: "Lusitana",
        fontWeight: "700",
      }}
    >
      Python <br/> Java <br/> C++ <br/> MATLAB <br/>
    </div>
</div>);

const Experience = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);
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
          className={
            isOpen[0] ? ExperienceCss.bluefullBubble : ExperienceCss.bluesmallBubble
          }
          onClick={() => {
            isOpen[0] ? 

            setIsOpen([false, true, false, false]):
            setIsOpen([true, false, false, false])
          }}
        >
          {isOpen[0]
            ? 
              blueBubbleText[0]
            : blueBubbleText[1]}
        </span>
        <span
          className={
            isOpen[1] ? ExperienceCss.orangefullBubble : ExperienceCss.orangesmallBubble
          }
          onClick={() => {
            isOpen[1] ? 

            setIsOpen([false, false, true, false]):
            setIsOpen([false, true, false, false])
          }}
        >
          {isOpen[1]
            ? 
              orangeBubbleText[0]
            : orangeBubbleText[1]}
        </span>
        <span
          className={
            isOpen[2] ? ExperienceCss.yellowfullBubble : ExperienceCss.yellowsmallBubble
          }
          onClick={() => {
            isOpen[2] ? 

            setIsOpen([true, false, false, true]):
            setIsOpen([false, false, true, false])
          }}
        >
          {isOpen[2]
            ? 
              yellowBubbleText[0]
            : yellowBubbleText[1]}
        </span>
        <span
          className={
            isOpen[3] ? ExperienceCss.brownfullBubble : ExperienceCss.brownsmallBubble
          }
          onClick={() => {
            isOpen[3] ? 

            setIsOpen([true, false, false, false]):
            setIsOpen([true, false, false, true])
          }}
        >
          {isOpen[3]
            ? 
              brownBubbleText[0]
            : brownBubbleText[1]}
        </span>
      </div>
    </div>
  );
};

export default Experience;
