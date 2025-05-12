import { useState, useContext } from "react";

import themeContext from "../../themeContext/themeContext";

import myProjectsList from "./myProjectsList";
import { MdDoubleArrow } from "react-icons/md";

import {
  ProjectsSectionContainer,
  ProjectContainer,
  TextContainer,
  TextHeading,
  TextSubNote,
  Projects,
  ProjectsBtn,
} from "./styledComponents";

import ProjectCard from "../ProjectCard";

function ProjectsSection() {
  const { isDarkMode } = useContext(themeContext);
  const [projects, setProjects] = useState({
    projectCardList: myProjectsList,
  });

  const { projectCardList } = projects;
  ;

  return (
    <ProjectsSectionContainer id="projects" isDarkMode={isDarkMode}>
      <ProjectContainer>
        <TextContainer>
          <TextHeading>Featured Projects</TextHeading>
          <TextSubNote>Some Projects I have worked on</TextSubNote>
        </TextContainer>
        <ProjectContainer>
          <Projects>
            {projectCardList.map((project) => (
              <ProjectCard key={project.id} projectDeatils={project} />
            ))}
          </Projects>
        </ProjectContainer>
      </ProjectContainer>
      <ProjectsBtn>
        <a
          href="https://github.com/SanojS31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>See More Work</span>
          <MdDoubleArrow
            style={{
              fontSize: "20px",
              marginLeft: "7px",
            }}
          />
        </a>
      </ProjectsBtn>
    </ProjectsSectionContainer>
  );
}

export default ProjectsSection;
