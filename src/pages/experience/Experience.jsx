import React, { useState } from "react";

import ExperienceCss from "./Experience.module.css";
const blueBubbleText = [];
blueBubbleText.push(
  <div className={ExperienceCss.blueBubble0}>
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
orangeBubbleText.push(
  <div
    className={ExperienceCss.orangeBubble0}
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <div
      style={{
        marginTop: "23vh",
        fontSize: "3.5vw",
        fontFamily: "PT Serif",

        fontWeight: "700",
      }}
    >
      Frontend Experience
    </div>
    <div
      style={{
        paddingTop: "2vh",
        fontSize: "1.2vw",
        fontFamily: "PT Serif",
        width: "38vw",
        fontWeight: "400",
      }}
    >
      In 2021, I developed a custom nutrition/health mobile app with React
      Native for my high school community. It was my first experience with
      frontend development and played with React Native elements and CSS styles.
      I also learned how to fetch apis from the frontend to connect with my
      backend. In 2022, I explored web development with ReactJS, CSS, and HTML.
      I worked on two projects, my coding portfolio website and an in-progress
      platform for note-sharing between students. My portfolio website allowed
      me to explore CSS animations in depth and built my ReactJS and HTML
      foundations. The note-sharing platform allowed me to dive deeper into
      ReactJS frameworks, flexible HTML/CSS, and more complicated fetches with
      the backend api.
    </div>
  </div>
);
orangeBubbleText.push(
  <div>
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
      React Native <br /> HTML <br /> CSS <br /> ReactJS <br />
    </div>
  </div>
);

const yellowBubbleText = [];
yellowBubbleText.push(
  <div className={ExperienceCss.yellowBubble0}>
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
      In 2021, I used Django frameworks in Python to setup the backend for my
      nutrition/health mobile app. I learned about backend organization such as
      models, serializers, views, urls, and GET/POST/PUT/DElETE requests. I
      stored and organized each student's daily intake/exercise to MongoDB and
      calculated personalized suggestions for the user. In 2022, our team used
      FastAPI as our backend framework and SQL for storing data. I learned about
      FastAPI frameworks and backend topics such as tokens and authentication.
    </div>
  </div>
);
yellowBubbleText.push(
  <div>
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
      Django <br /> MongoDB <br /> FastAPI <br /> SQL <br />
    </div>
  </div>
);
const brownBubbleText = [];
brownBubbleText.push(
  <div
    className={ExperienceCss.brownBubble0}
    style={{
      marginLeft: "1vw",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "right",
    }}
  >
    <div
      style={{
        fontSize: "4vw",
        fontFamily: "PT Serif",
        marginRight: "5vw",
        fontWeight: "700",
      }}
    >
      General
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
      In middle school, I started learning some Java and C++ and gradually
      started doing problem-solving exercises in both languages on sites such as
      UVA online judge, HackerRank, Leetcode, and CodingBat. In freshman year
      high school 2018, I strengthened my Java fundamentals with AP Computer
      Science earning a 5. In junior year 2020, I started learning Python and
      graphic libraries in Java in the Honors Artificial Inteliigence course.
      Pygame,StdDraw, Java Swing Then I took more CS courses and worked on my
      own projects in Python: webcrawling with Selenium, Tensorflow, Keras,
      scipy, sympy, matplotlib, and vpython. Senior year, I learned Simulink for
      constructing gates and simulating quantum algorithms, Grover's and
      Simon's. I also used MATLAB for linear algebra, data visualization, and
      simple neural networks.
    </div>
  </div>
);
brownBubbleText.push(
  <div>
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
      Python <br /> Java <br /> C++ <br /> MATLAB <br />
    </div>
  </div>
);

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const backgroundBubbles = [];
for (var i = 0; i < 15; i++) {
  var t = getRandomArbitrary(0, 100).toString() + "vh";
  var l = getRandomArbitrary(10, 90).toString() + "vw";
  var size = getRandomArbitrary(1, 4).toString() + "vw";

  backgroundBubbles.push(
    <div
      key={i}
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: l,
        top: t,
      }}
      className={ExperienceCss.backgroundBubble}
    />
  );
}
for (i = 0; i < 10; i++) {
  t = getRandomArbitrary(0, 100).toString() + "vh";
  l = getRandomArbitrary(10, 90).toString() + "vw";
  size = getRandomArbitrary(5, 9).toString() + "vw";

  backgroundBubbles.push(
    <div
      key={i}
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: l,
        top: t,
      }}
      className={ExperienceCss.backgroundBubble}
    />
  );
}
for (i = 0; i < 5; i++) {
  t = getRandomArbitrary(0, 100).toString() + "vh";
  l = getRandomArbitrary(10, 90).toString() + "vw";
  size = getRandomArbitrary(10, 15).toString() + "vw";

  backgroundBubbles.push(
    <div
      key={i}
      style={{
        position: "absolute",
        width: size,
        height: size,
        left: l,
        top: t,
      }}
      className={ExperienceCss.backgroundBubble}
    />
  );
}
const Experience = () => {
  const [isOpen, setIsOpen] = useState([true, false, false, false]);

  window.scrollTo(0, 0);
  return (
    <div className={ExperienceCss.wholepage}>
      <div className={ExperienceCss.background}>{backgroundBubbles}</div>
      <div className={ExperienceCss.mainContent}>
        <span
          className={
            isOpen[0]
              ? ExperienceCss.bluefullBubble
              : ExperienceCss.bluesmallBubble
          }
          onClick={() => {
            isOpen[0]
              ? setIsOpen([false, true, false, false])
              : setIsOpen([true, false, false, false]);
          }}
        >
          {isOpen[0] ? blueBubbleText[0] : blueBubbleText[1]}
        </span>
        <span
          className={
            isOpen[1]
              ? ExperienceCss.orangefullBubble
              : ExperienceCss.orangesmallBubble
          }
          onClick={() => {
            isOpen[1]
              ? setIsOpen([false, false, true, false])
              : setIsOpen([false, true, false, false]);
          }}
        >
          {isOpen[1] ? orangeBubbleText[0] : orangeBubbleText[1]}
        </span>
        <span
          className={
            isOpen[2]
              ? ExperienceCss.yellowfullBubble
              : ExperienceCss.yellowsmallBubble
          }
          onClick={() => {
            isOpen[2]
              ? setIsOpen([true, false, false, true])
              : setIsOpen([false, false, true, false]);
          }}
        >
          {isOpen[2] ? yellowBubbleText[0] : yellowBubbleText[1]}
        </span>
        <span
          className={
            isOpen[3]
              ? ExperienceCss.brownfullBubble
              : ExperienceCss.brownsmallBubble
          }
          onClick={() => {
            isOpen[3]
              ? setIsOpen([true, false, false, false])
              : setIsOpen([true, false, false, true]);
          }}
        >
          {isOpen[3] ? brownBubbleText[0] : brownBubbleText[1]}
        </span>
      </div>
    </div>
  );
};

export default Experience;
