import { styled } from "styled-components";

export const ProjectsSectionContainer = styled.section`
  background-color: ${(props) => (props.isDarkMode ? "#010116" : "#f1f1f1")};
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  position: relative;
  padding: 60px 0;
  text-align: center;
  margin-top: 20px;
  width: 100%;
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 30px 0 !important;
  }
`;

export const ProjectContainer = styled.div`
  margin-bottom: 20px;
  padding: 0 40px;
  @media (max-width: 908px) {
    margin-bottom: 30px !important;
    padding: 0 25px !important;
  }
  @media (max-width: 349px) {
    padding: 0 25px !important;
  }
`;

export const TextContainer = styled.div`
  margin-bottom: 20px;`;

export const TextHeading = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;

export const TextSubNote = styled.p`
  font-family: "Roboto Mono", monospace;
`;

export const Projects = styled.ul`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  list-style: none;
  padding: 0;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr) !important;
  }
  @media (max-width: 455px) {
    grid-template-columns: repeat(1, 1fr) !important;
  }
`;

export const ProjectsBtn = styled.button`
  background-color: #111;
  border: 1.5px solid #f2f2f2;
  border-radius: 5px;
  color: #f1f1f1;
  cursor: pointer;
  outline: none;
  text-align: center;
  height: 40px;
  width: 140px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
  > a {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > span {
    transition: all 0.5s ease;
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #0ab635;
  }
`;
