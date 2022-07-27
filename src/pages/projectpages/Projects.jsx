import React, { useRef, useState } from "react";
import ProjectsCss from "./Projects.module.css";
import Grid from "@mui/material/Grid";
import ProjectDetails from "../../components/projectdetails/projectDetails.jsx";
import { aiProjects, modernTopics } from "../../components/projectDictionaries";
const Projects = ({ pageTitle, pageDescriptionName, pageDescriptionText }) => {
  var projDetails = [];
  var selectedProj = "";
  if (pageTitle === "Honors AI Projects") {
    projDetails = aiProjects;
    selectedProj = projDetails[0].projName;
  } else if (pageTitle === "Honors Modern Topics in CS Projects") {
    projDetails = modernTopics;
    selectedProj = projDetails[0].projName;
  }

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const options = [];

  for (var i = 0; i < projDetails.length; i++) {
    options.push(
      <option key={i} value={projDetails[i].projName}>
        {projDetails[i].projName}
      </option>
    );
  }

  return (
    <div className={ProjectsCss.wholepage}>
      <div className={ProjectsCss.top}>
        <h1 className={ProjectsCss.title}>{pageTitle}</h1>
        <button
          onClick={() => {
            scrollToBottom();
          }}
          className={ProjectsCss.courseButton}
        >
          {pageDescriptionName}
        </button>
      </div>
      <div className={ProjectsCss.projectHeading}>
        <h2 className={ProjectsCss.projectName}>{selectedProj}</h2>
        <select
          className={ProjectsCss.projectList}
          name="projectlist"
          id="projectlist"
          value={selectedProj}
          onChange={(e) => {
            selectedProj = e.target.value;
          }}
        >
          {options}
        </select>
      </div>
      <ProjectDetails
        projectName={selectedProj}
        dictionary={projDetails.find(
          (element) => element.projName === selectedProj
        )}
      />

      <div ref={messagesEndRef} />
      <footer className={ProjectsCss.courseFooter}>
        <h2 className={ProjectsCss.courseDescriptionTitle}>
          {pageDescriptionName}
        </h2>
        <div className={ProjectsCss.courseDescription}>
          {pageDescriptionText}
        </div>
      </footer>
    </div>
  );
};

export default Projects;
