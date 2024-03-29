import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBarCss from "./TopBar.module.css";

const TopBar = () => {
  let navigate = useNavigate();
  const url = window.location.href.split("/")[5];
  const [selectedTab, setSelected] = useState(url);

  const refreshPage = () => {
    window.location.reload();
  };

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
          refreshPage();
        }}
      >
        <h2 className={TopBarCss.title}>BC Coding Portfolio</h2>
      </button>

      <div className={TopBarCss.rightSide}>
        <div className={TopBarCss.dropdowncontainer}>
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
              <button
                className={TopBarCss.dropdownbtn}
                onClick={() => {
                  navigate("/project/aiProjects");
                  setSelected("project");
                  refreshPage();
                }}
              >
                Honors AI Projects
              </button>
              <button
                className={TopBarCss.dropdownbtn}
                onClick={() => {
                  navigate("/project/modernTopics");
                  setSelected("project");
                  refreshPage();
                }}
              >
                Honors Modern Topics in CS Projects
              </button>
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
            refreshPage();
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
            refreshPage();
          }}
        >
          <div>About Me</div>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
