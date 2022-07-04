import React from "react";
import ProjectsCss from "./Projects.module.css";
import Grid from "@mui/material/Grid";
const Projects = () => {
  return (
    <div className={ProjectsCss.wholepage}>
      <div className={ProjectsCss.top}>
        <h1 className={ProjectsCss.title}>Honors AI Projects</h1>
        <button className={ProjectsCss.courseButton}>Course Description</button>
      </div>
      <div className={ProjectsCss.projectHeading}>
        <h2 className={ProjectsCss.projectName}>Assignment 41. Gridworld</h2>
        <select
          className={ProjectsCss.projectList}
          name="projectlist"
          id="projectlist"
        >
          <option value="">01. Gridworld</option>
          <option value="">02. Pathfinding</option>
          <option value="">03. Hello World</option>
          <option value="">04. Game of Life</option>
        </select>
      </div>
      <Grid container spacing={3} className={ProjectsCss.projectInfo}>
        <Grid item xs={12} className={ProjectsCss.projectDescription}>
          <div className={ProjectsCss.blockTitle}>Project Description:</div>
          <div className={ProjectsCss.descriptionSection}>
            <div className={ProjectsCss.descriptionImage}></div>
            <div className={ProjectsCss.projectDescriptionText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
        </Grid>
        <Grid item xs={6} className={ProjectsCss.verticalBlock}>
          <div>
            <div className={ProjectsCss.blockTitle}>What I learned:</div>
            <div className={ProjectsCss.verticalSection}>
              <div className={ProjectsCss.projectDescriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className={ProjectsCss.verticalImage}></div>
              <div className={ProjectsCss.projectDescriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={6} className={ProjectsCss.verticalBlock}>
          <div>
            <div className={ProjectsCss.blockTitle}>Challenges I faced:</div>
            <div className={ProjectsCss.verticalSection}>
              <div className={ProjectsCss.projectDescriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
              <div className={ProjectsCss.verticalImage}></div>
              <div className={ProjectsCss.projectDescriptionText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <footer className={ProjectsCss.courseFooter}>
        <h2 className={ProjectsCss.courseDescriptionTitle}>
          Course Description
        </h2>
        <div className={ProjectsCss.courseDescription}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </footer>
    </div>
  );
};

export default Projects;
