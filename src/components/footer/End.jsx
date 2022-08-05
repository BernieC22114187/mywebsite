import React from "react";
import EndCss from "./End.module.css";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from '@mui/icons-material/Instagram';
const End = () => {
  let navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#14213d",
        color: "white",
      }}
    >
      <h1 className={EndCss.header}>Contact/Find me</h1>
      <div className={EndCss.email}>
            Email: <u>bernie0716@gmail.com</u>
        </div>
      <div className={EndCss.container}>
        
        <div className={EndCss.block}>
          <IconButton onClick={() => {
            window.open('https://github.com/BernieC22114187','_blank')
          }} >
            <GitHubIcon style={{ color: '#00afb9', width: "8vh", height:"8vh" }}/>
          </IconButton>
        </div>
        <div className={EndCss.block}>
          <IconButton onClick={() => {
            window.open('https://www.linkedin.com/in/bernie-chen-244713235','_blank')
          }}>
            <LinkedInIcon  style={{ color: '#5390d9', width: "8vh", height:"8vh" }}/>
          </IconButton>
        </div>
        <div className={EndCss.block}>
          <IconButton onClick={() => {
            window.open('https://www.facebook.com/bernie.chen.1401','_blank')
          }}>
            <FacebookIcon style={{ color: '#4361ee', width: "8vh", height:"8vh" }}/>
          </IconButton>
        </div>
        <div className={EndCss.block} onClick={() => {
            window.open('https://www.instagram.com/bernie_chen716/?hl=en','_blank')
          }}>
          <IconButton>
            <InstagramIcon style={{ color: '#f72585', width: "8vh", height:"8vh" }}/>
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default End;
