import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Projects from "./pages/projectpages/Projects.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import Aboutme from "./pages/aboutme/Aboutme.jsx";
import Experience from "./pages/experience/Experience.jsx";
import Landing from "./pages/landingpage/Landing.jsx";

function App() {
  // mac screen 1512 x 982
  return (
    <div className="App">
      <BrowserRouter>
        <header id="header" className="header">
          <TopBar />
        </header>
        {/* <script>
          var clientHeight = document.getElementByID('header').clientHeight;
        </script> */}
        <div className="body">
          <Routes>
            <Route path="/home" element={<Landing />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/aboutme" element={<Aboutme />} />
            <Route path="/project">
              <Route path=":pageTitle" element={<Projects />} />
            </Route>
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
