
import "./App.css";
import OutlinedCard from "./components/Card/card.jsx";
import { AppBar, Typography, Button} from "@mui/material";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
 
import Projects from "./pages/projectpages/Projects.jsx"
import TopBar from "./components/TopBar/TopBar.jsx"
function App() {

  
  return (
    <div className="App">
      <BrowserRouter>
        <header className="header">
          <TopBar/>
        </header>
        <div className = "body">
          
          <Routes>
            <Route path="/projects" element = {<Projects/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
