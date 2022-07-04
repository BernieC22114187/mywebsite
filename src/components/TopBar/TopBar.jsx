import {React, useState} from "react";

import { Button} from "@mui/material";
import {useNavigate} from "react-router-dom";
import "./TopBar.css"
const TopBar = () => {
  let navigate = useNavigate();
  const [selectedTab, setSelected] = useState("projects");
 
  return (
    <div className = "topbar">
      <h2 className="title">BC Portfolio</h2>

      {/* <Link to ="projects"> */}
      <div   
        
        className = {"projectsButton" + (selectedTab === "projects" ? "Selected":"Unselected")}
        onClick={() => {
          navigate("/projects");
          setSelected("projects");
        }}

      >
        <div className="projects">Projects</div>
      </div >
      <Button
        
        onClick={() => {
          navigate("/experience");
          setSelected("experience");
        }}

      >
        <div className="projects">Experience</div>
      </Button>
      {/* </Link> */}
    </div>
  );
};

export default TopBar;
