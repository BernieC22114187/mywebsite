
import "./App.css";
import OutlinedCard from "./components/Card/card.jsx";
import { AppBar, Typography} from "@mui/material";


function App() {
  return (
    <div className="App">
      <div className = "TopBar">
        <span className = "title">CODING PORTFOLIO</span>
      </div>
      <div className = "aboutSection">
        <h2 className = "aboutTitle">ABOUT</h2>
        <h4 style = {{marginTop: 30, fontFamily: "Georgia, sans-serif", fontWeight: "normal"}}>Educational Background</h4>
        <div className = "eduDescription">College 2022 - Present Duke University</div>
        <div className = "eduDescription">High School 2018 - 2022 Taipei American School</div>
        <div className = "projects">
          {/*<OutlinedCard /> */}
          <OutlinedCard className = "projectCard" title = "Personal Projects" />
          <OutlinedCard className = "projectCard" title = "Honors Artificial Intelligence Projects" />
          <OutlinedCard className = "projectCard" title = "Honors Modern Topics in Computer Science Projects" />
          <OutlinedCard className = "projectCard" title = "Synthetic Biology (iGEM) Project" />
          
        </div>
        <div className = "contact">
          <h2 className = "contactTitle">GET IN TOUCH</h2>
          <div className = "eduDescription">bernie0716@gmail.com</div>
          <div className = "eduDescription">(+886) 0921081823</div>
        </div>
      </div>
    </div>
  );
}

export default App;
