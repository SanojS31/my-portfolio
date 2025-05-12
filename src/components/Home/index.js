import { useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import Header from "../Header";
import AboutSection from "../AboutSection";
import ProjectsSection from "../ProjectsSection";
import Footer from "../Footer";

import { FaArrowCircleRight } from "react-icons/fa";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import {
  HeroSection,
  InfoContainer,
  MainContainer,
  PersonName,
  RoleType,
  RoleNote,
  MeAnchorLink,
  ScrollUp,
  HeroImage,
} from "./styledComponents";

function Home() {
  const { isDarkMode } = useContext(themeContext);

  return (
    <>
      <Header />
      {/* Main */}
      <MainContainer isDarkMode={isDarkMode}>
        {/* Hero Section */}
        <HeroSection id="hero">
          <InfoContainer>
            <PersonName>Hi, I'm Sanoj👋</PersonName>
            <RoleType>Full Stack Developer</RoleType>
            <RoleNote>
              Experienced full stack developer proficient in creating robust web
              applications and crafting user-friendly digital solutions.
            </RoleNote>
            <MeAnchorLink href="#about">
              See Why You should Work With Me{" "}
              <FaArrowCircleRight
                style={{
                  marginLeft: "7px",
                }}
              />
            </MeAnchorLink>
          </InfoContainer>
          <HeroImage 
            src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?ga=GA1.1.918559383.1745855273&semt=ais_hybrid&w=740" 
            alt="Sanoj - Full Stack Developer"
          />
        </HeroSection>
      </MainContainer>
      {/* AboutSection */}
      <AboutSection />
      {/* ProjectsSection */}
      <ProjectsSection />
      {/* Footer */}
      <Footer />
      <ScrollUp aria-label="scroll-up" href="#" isDarkMode={isDarkMode}>
        <MdKeyboardDoubleArrowUp
          style={{
            color: isDarkMode ? "#fff" : "#000",
          }}
        />
      </ScrollUp>
    </>
  );
}

export default Home;
