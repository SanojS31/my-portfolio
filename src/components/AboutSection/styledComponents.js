import styled from "styled-components";

export const AboutSectionContainer = styled.section`
  padding: 60px 80px;

  @media (max-width: 908px) {
    padding: 0 50px !important;
  }
  @media (max-width: 700px) {
    padding: 0 80px;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    padding: 0 30px !important;
    width: 100% !important;
  }
  @media (max-width: 349px) {
    padding: 0 25px !important;
  }
`;

export const Background = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : " #333333")};

  position: relative;
  animation: slide-up 3s ease-in 1s forwards;
  @media (max-width: 908px) {
    padding-left: 0px !important;
    margin-top: 50px !important;
  }
  @media (max-width: 700px) {
    padding-left: 0px !important;
    padding-top: 20px !important;
  }
`;

export const BackgroundTitle = styled.h2`
  font-family: "Roboto Mono", monospace;
  font-size: 1.6rem;
  margin-bottom: 0.4rem;
`;
export const BackgroundSubtile = styled.h4``;

export const Description = styled.p`
  font-family: "Roboto Mono", monospace;
  line-height: 1.3;
  margin: 10px 0;
`;

export const TechStackContainer = styled.div`
  position: relative;
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : " #333333")};
  display: flex;
  flex-direction: column;
  padding: 30px 0 0px;
  animation: slide-right 3s ease-in 1s forwards;
`;

export const TechStackHeading = styled.h4``;

export const Tools = styled.div`
  font-family: "Roboto Mono", monospace;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  @media (max-width: 908px) {
    grid-template-columns: repeat(3, 1fr) !important;
  }
  @media (max-width: 700px) {
    display: grid !important;
    grid-gap: 2px;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    padding-bottom: 25px !important;
  }
`;

export const ToolList = styled.ul`
  list-style: none;
  padding-top: 10px;
`;

export const ToolItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  font-weight: bolder;
  padding: 3px 40px 3px 0;
  margin-top: 2px;
  @media (max-width: 700px) {
    padding: 0px !important;
    margin-top: 5px !important;
    font-size: 0.9rem;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.8rem !important;
  }
`;
