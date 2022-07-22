import "./App.css";

import { AppBar, Typography, Button } from "@mui/material";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

import Projects from "./pages/projectpages/Projects.jsx";
import TopBar from "./components/TopBar/TopBar.jsx";
import Aboutme from "./pages/aboutme/Aboutme.jsx";
import Experience from "./pages/experience/Experience.jsx"
import Landing from "./pages/landingpage/Landing.jsx"

function App() {
  // mac screen 1512 x 982
  return (
    
    <div className="App">
      <BrowserRouter>
        <header id = "header" className="header">
          <TopBar />
        </header>
        {/* <script>
          var clientHeight = document.getElementByID('header').clientHeight;
        </script> */}
        <div className="body">
          <Routes>
            <Route path="/home" element={<Landing/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/aboutme" element={<Aboutme/>} />
            <Route
              path="/aiprojects"
              element={
                <Projects
                  pageTitle="Honors AI Projects"
                  pageDescriptionName="Course Description"
                  pageDescriptionText="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum."
                />
              }
            />
            <Route
              path="/moderntopicsprojects"
              element={
                <Projects
                  pageTitle="Honors Modern Topics in CS Projects"
                  pageDescriptionName="Course Description"
                  pageDescriptionText="
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus et purus at egestas. Cras at placerat sem. In non erat purus. Mauris non porttitor ligula. Nam pharetra, tortor ac pulvinar sollicitudin, urna leo condimentum augue, eget dignissim nibh arcu et erat. Ut accumsan sodales nunc, vel pellentesque est pretium pretium. Cras consequat nisi est, eu dapibus ligula faucibus vel. Fusce est diam, aliquet ut lacus eu, sodales laoreet tortor. Donec non felis pharetra, cursus massa et, sollicitudin magna. Cras vel elit egestas, porta nisi convallis, vulputate erat. Curabitur mollis, quam ac blandit vestibulum, velit felis malesuada lectus, non sagittis sapien sem quis nisl. Cras ut lacinia ante, sed imperdiet urna. Quisque efficitur commodo interdum. Suspendisse ac auctor velit, et accumsan lectus. Praesent condimentum mattis vehicula. Aliquam congue finibus magna at sodales."
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
