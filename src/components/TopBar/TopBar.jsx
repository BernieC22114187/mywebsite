import { React, useState } from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TopBarCss from "./TopBar.module.css";
const TopBar = () => {
  let navigate = useNavigate();
  const [selectedTab, setSelected] = useState("projects");

  return (
    <div className={TopBarCss.topbar}>
      <h2 className={TopBarCss.title}>BC Coding Portfolio</h2>

      <div className={TopBarCss.rightSide}>
        <div
          className={
            selectedTab === "projects"
              ? TopBarCss.ButtonSelected
              : TopBarCss.ButtonUnselected
          }
          onClick={() => {
            navigate("/projects");
            setSelected("projects");
          }}
        >
          <div>Projects</div>
        </div>
        <div
          className={
            selectedTab === "experience"
              ? TopBarCss.ButtonSelected
              : TopBarCss.ButtonUnselected
          }
          onClick={() => {
            navigate("/experience");
            setSelected("experience");
          }}
        >
          <div>Coding Experience</div>
        </div>
        <div
          className={
            selectedTab === "aboutme"
              ? TopBarCss.ButtonSelected
              : TopBarCss.ButtonUnselected
          }
          onClick={() => {
            navigate("/aboutme");
            setSelected("aboutme");
          }}
        >
          <div>About Me</div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
