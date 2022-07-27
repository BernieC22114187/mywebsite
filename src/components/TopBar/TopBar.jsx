import { React, useState } from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TopBarCss from "./TopBar.module.css";

const TopBar = () => {
  let navigate = useNavigate();
  const [selectedTab, setSelected] = useState("home");
  
  return (
    <div className={TopBarCss.topbar}>
      <button
          className={
            selectedTab === "home"
              ? TopBarCss.homeSelected
              : TopBarCss.homeUnselected
          }
          onClick={() => {
            navigate("/home");
            setSelected("home");
          }}
        >
          <h2 className={TopBarCss.title}>BC Coding Portfolio</h2>
        </button>
      

      <div className={TopBarCss.rightSide}>
        <div className = {TopBarCss.dropdowncontainer}>
          <div className={TopBarCss.dropdown}>
            <button
              className={
                
                selectedTab === "project"
                ? TopBarCss.dropbtnSelected
                : TopBarCss.dropbtn
              }
              
            >
              Projects
            </button>

            <div className={TopBarCss.dropdownContent}>
              <button  className={TopBarCss.dropdownbtn} onClick={() => {
                navigate("/project/aiProjects");
                setSelected("project");
                
                }}
                >Honors AI Projects</button>
              <button className={TopBarCss.dropdownbtn} onClick={() => {
                navigate("/project/modernTopics");
                setSelected("project");
                
                }}
                >Honors Modern Topics in CS Projects</button>
            </div>
          </div>
        </div>
        

        <button
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
        </button>
        <button
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
        </button>
      </div>
    </div>
  );
};

export default TopBar;
