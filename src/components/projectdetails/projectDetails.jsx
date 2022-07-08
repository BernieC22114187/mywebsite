import React from "react";
import ProjectsCss from "./projectDetails.module.css"
import Grid from "@mui/material/Grid";
export function ProjectDetails ({projectName,
    dictionary}){
    
  
  const projDescText2 = dictionary.projDescText;
  
  const projLearn = dictionary.projLearn;
  const projChallenge = dictionary.projChallenge;
  
  return (
    <div>
      <Grid container spacing={3} className={ProjectsCss.projectInfo}>
        <Grid item xs={12} className={ProjectsCss.projectDescription}>
          <div className={ProjectsCss.blockTitle}>Project Description:</div>
          <div className={ProjectsCss.descriptionSection}>
            <div className={ProjectsCss.descriptionImage}></div>
            <div className={ProjectsCss.projectDescriptionText}>
              {projDescText2}
            </div>
          </div>
        </Grid>
        <Grid item xs={5.8} className={ProjectsCss.verticalBlock}>
          <div className={ProjectsCss.blockTitle}>Challenges I faced:</div>
          <div className={ProjectsCss.verticalSection}>
            <div className={ProjectsCss.projectDescriptionText}>
                {projChallenge}
            </div>
            <div className={ProjectsCss.verticalImage}></div>
            <div className={ProjectsCss.projectDescriptionText}>
              {projChallenge}
            </div>
          </div>
        </Grid>
        <Grid item xs={0.4}></Grid>
        <Grid item xs={5.8} className={ProjectsCss.verticalBlock}>
          <div className={ProjectsCss.blockTitle}>What I learned:</div>
          <div className={ProjectsCss.verticalSection}>
            <div className={ProjectsCss.projectDescriptionText}>
              {projLearn}
            </div>
            <div className={ProjectsCss.verticalImage}></div>
            <div className={ProjectsCss.projectDescriptionText}>
              {projLearn}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProjectDetails;