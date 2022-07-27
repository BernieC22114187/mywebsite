import React from "react";
import ProjectsCss from "./projectDetails.module.css"
import Grid from "@mui/material/Grid";

export function ProjectDetails ({projectName,
    dictionary}){
    
  
  const projDescText = dictionary.projDescText;
  
  
  const descImg = dictionary.descImg;
  const sec1Img = dictionary.sec1Img;
  const sec2Img = dictionary.sec2Img; 

  const sec1 = dictionary.sec1;
  const sec2 = dictionary.sec2;

  const sec1Title = dictionary.sec1Title;
  const sec2Title = dictionary.sec2Title;

 
  
  return (
    <div>
      <Grid container spacing={3} className={ProjectsCss.projectInfo}>
        <Grid item xs={12} className={ProjectsCss.projectDescription}>
          <div className={ProjectsCss.blockTitle}>Project Description:</div>
          <div className={ProjectsCss.descriptionSection}>
            <div className={ProjectsCss.descriptionImageContainer} >
              <img className = {ProjectsCss.Image}src={require(`../images/${descImg}`)}></img>
            </div>
            
            <div className={ProjectsCss.projectDescriptionText}>
              {projDescText}
            </div>
          </div>
        </Grid>
        <Grid item xs={5.8} className={ProjectsCss.verticalBlock}>
          <div className={ProjectsCss.blockTitle}>{sec1Title}</div>
          <div className={ProjectsCss.verticalSection}>
            <div className={ProjectsCss.projectDescriptionText}>
                {sec1}
            </div>
            
            <div>
              {
                sec1Img === "none" ? <></>:
                <img className = {ProjectsCss.verticalImage}src={require(`../images/${sec1Img}`)}></img>
              }
              
            </div>
          </div>
        </Grid>
        <Grid item xs={0.4}></Grid>
        <Grid item xs={5.8} className={ProjectsCss.verticalBlock}>
          <div className={ProjectsCss.blockTitle}>{sec2Title}</div>
          <div className={ProjectsCss.verticalSection}>
            <div className={ProjectsCss.projectDescriptionText}>
              {sec2}
            </div>
            <div>
              {
                sec2Img !== "none" &&
                <img className = {ProjectsCss.verticalImage}src={require(`../images/${sec2Img}`)}></img>
              }
            </div>
            
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
export default ProjectDetails;