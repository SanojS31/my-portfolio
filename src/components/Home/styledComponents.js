import { styled } from "styled-components";

export const MainContainer = styled.main`
  background-color: ${(props) => (props.isDarkMode ? "#0a0a1f" : "#372fa9")};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 80% 90%, 0 100%);
  background-size: 55px 55px;
  height: 100vh;
  overflow-x: hidden;

  @media (max-width: 908px) {
    height: auto !important;
  }
`;

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  min-height: 100vh;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

export const HeroImage = styled.img`
  width: 50%;
  height: 50%;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    margin-top: 100px;
    margin-bottom: 2rem;
  }
`;

export const InfoContainer = styled.div`
  color: #f6f6f6;
  transition: all 0.3s ease-in-out;
  @media (max-width: 908px) {
    margin-bottom: 150px !important;
  }
  @media (max-width: 700px) {
    margin-bottom: 50px !important;
    margin-top: 80px !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    margin-top: 60px !important;
  }
`;

export const PersonName = styled.span`
  font-family: "Roboto Mono", monospace;
  font-size: 1.5rem;
  margin-bottom: 5px;
  line-height: 23.04px;
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 1rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.8rem !important;
  }
`;

export const RoleType = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0px;
  margin-bottom: 5px;
  font-size: 56px;
  font-family: Jost;
  font-weight: bolder;

  @media (max-width: 700px) {
    font-size: 3rem !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 2.8rem !important;
  }
  @media (max-width: 349px) {
    font-size: 2rem !important;
  }
`;

export const RoleNote = styled.p`
  line-height: 1.5;
  font-family: "Roboto Mono", monospace;
  margin: 0px;
  margin-bottom: 14px;
  width: 60%;
  @media (max-width: 700px) {
    width: 100% !important;
  }
  @media (max-width: 600px) and (min-width: 350px) {
    width: 100% !important;
  }
  @media (max-width: 349px) {
    font-size: 0.75rem !important;
  }
`;

export const MeAnchorLink = styled.a`
  display: flex;
  align-items: center;
  color: #00d46a !important;
  font-family: "Roboto Mono", monospace;
  font-size: 0.85rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  @media (max-width: 600px) and (min-width: 350px) {
    font-size: 0.7rem !important;
  }
  @media (max-width: 349px) {
    font-size: 0.6rem !important;
  }
  &:hover {
    color: rgba(255, 255, 255, 1);
    text-shadow: 0 5px 15px #0ab635;
  }
`;

export const ScrollUp = styled.a`
  bottom: 25px;
  background-color: #00d46a;
  border-radius: 50%;
  cursor: pointer;

  font-size: 1.8rem;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 32px;
  width: 50px;
  height: 50px;
  transition: all 0.5s ease;
  &:hover {
  }
`;
