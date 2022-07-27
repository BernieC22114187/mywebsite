import React, { useEffect, useRef, useState } from "react";
import ProjectsCss from "./Projects.module.css";
import ProjectDetails from "../../components/projectdetails/projectDetails.jsx";
import { aiProjects, modernTopics } from "../../components/projectDictionaries";
import { useParams } from "react-router-dom";

const Projects = () => {
  let { pageTitle } = useParams();
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const pageData = [
    {
      pageTitle: "aiProjects",
      projTitle: "Honors AI Projects",
      projDetails: aiProjects,
      pageDescriptionName: "Course Description",
      pageDescriptionText:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      pageTitle: "modernTopics",
      projTitle: "Honors Modern Topics in CS Projects",
      projDetails: modernTopics,
      pageDescriptionName: "Course Description",
      pageDescriptionText:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dapibus et purus at egestas. Cras at placerat sem. In non erat purus. Mauris non porttitor ligula. Nam pharetra, tortor ac pulvinar sollicitudin, urna leo condimentum augue, eget dignissim nibh arcu et erat. Ut accumsan sodales nunc, vel pellentesque est pretium pretium. Cras consequat nisi est, eu dapibus ligula faucibus vel. Fusce est diam, aliquet ut lacus eu, sodales laoreet tortor. Donec non felis pharetra, cursus massa et, sollicitudin magna. Cras vel elit egestas, porta nisi convallis, vulputate erat. Curabitur mollis, quam ac blandit vestibulum, velit felis malesuada lectus, non sagittis sapien sem quis nisl. Cras ut lacinia ante, sed imperdiet urna. Quisque efficitur commodo interdum. Suspendisse ac auctor velit, et accumsan lectus. Praesent condimentum mattis vehicula. Aliquam congue finibus magna at sodales.",
    },
  ];
  const options = [];
  const [selectedProj, setSelected] = useState(
    pageData.find((d) => d.pageTitle === pageTitle).projDetails[0].projName
  );
  const [selectedProjData, setSelectedProjData] = useState(
    pageData.find((d) => d.pageTitle === pageTitle)
  );

  useEffect(() => {
    const finded = pageData.find((d) => d.pageTitle === pageTitle);
    setSelected(finded.projDetails[0].projName);
    setSelectedProjData(finded);
  }, [pageTitle]);

  for (var i = 0; i < selectedProjData.projDetails.length; i++) {
    options.push(
      <option key={i} value={selectedProjData.projDetails[i].projName}>
        {selectedProjData.projDetails[i].projName}
      </option>
    );
  }

  return (
    <div className={ProjectsCss.wholepage}>
      <div className={ProjectsCss.top}>
        <h1 className={ProjectsCss.title}>{selectedProjData.projTitle}</h1>
        <button
          onClick={() => {
            scrollToBottom();
          }}
          className={ProjectsCss.courseButton}
        >
          {selectedProjData.pageDescriptionName}
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
            setSelected(e.target.value);
          }}
        >
          {options}
        </select>
      </div>
      <ProjectDetails
        projectName={selectedProj}
        dictionary={selectedProjData.projDetails.find(
          (element) => element.projName === selectedProj
        )}
      />

      <div ref={messagesEndRef} />
      <footer className={ProjectsCss.courseFooter}>
        <h2 className={ProjectsCss.courseDescriptionTitle}>
          {selectedProjData.pageDescriptionName}
        </h2>
        <div className={ProjectsCss.courseDescription}>
          {selectedProjData.pageDescriptionText}
        </div>
      </footer>
    </div>
  );
};

export default Projects;