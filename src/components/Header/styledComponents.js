import styled from "styled-components";

export const WebsiteHeader = styled.header`
  background-color: ${(props) => (props.isDarkMode ? "#010116" : "#f1f1f1")};
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 99;
  transition: 0.9s;
`;

export const Nav = styled.nav`
  box-shadow: 2px 2px 2px rgba(105, 105, 105, 0.3),
    2px 2px 2px rgba(105, 105, 105, 0.3);
  font-family: "Jost", sans-serif;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 80px;
  width: 100%;
  height: 70px;
  font-weight: bold;
  transition: 0.9s;
  transition: all 0.3s ease-in;
  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }
  @media (max-width: 908px) {
    padding: 0 50px !important;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
  }

  @media (max-width: 600px) and (min-width: 350px) {
    padding: 0 30px !important;
  }
  @media (max-width: 349px) {
    padding: 0 25px !important;
  }
`;

export const LogoContainer = styled.div``;

export const LogoImage = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
  object-fit: cover;
`;

export const NavLinksContainer = styled.ul`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333333")};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  list-style-type: disc;
  transition: 0.9s;
  @media (max-width: 908px) {
    margin-right: 0px !important;
  }
  @media (max-width: 700px) {
    right: ${(props) => (props.isMenuActive ? "0px" : "-100vw")};

    opacity: 0.95;

    background-color: ${(props) => (props.isDarkMode ? "#010116" : " #f1f1f1")};
    padding: 0 0 40px;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center;
    position: fixed;

    top: 70.2px;
    height: 100vh;
    width: 100vw;
    transition: all 0.5s ease-in-out;
  }
`;

export const NavLink = styled.li`
  list-style: none;
  letter-spacing: 1.5px;
  margin: 0 20px;
  border: none;
  transition: 0.9s;
  font-family: "jost" sans-serif solid;
  font-size: 15.2px;
  font-weight: 900;
  text-decoration: none;
  @media (max-width: 700px) {
    padding: 20px 0px;
  }
  &:hover {
    color: #00d46a;
    font-size: 18px;
  }
`;

export const DarkModeBtn = styled.button`
  background-color: transparent;
  cursor: pointer;
  margin: 0px;
  margin-left: 10px;
  font-size: 33px;
  padding: 0px;
  border: none;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#333333")};
  transition: 0.9s;
  @media (max-width: 700px) {
    margin-left: -10px;
  }
`;

export const HamburgerMenu = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f6f6f6" : "#333")};
  background-color: transparent;
  display: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bolder;
  position: relative;
  width: 33.6px;
  height: 25px;

  @media (max-width: 700px) {
    display: block;
  }
`;
export const Bar = styled.div`
  border-radius: 3px;
  transition: 0.5s;
  width: 2.1rem;
  height: 3px;
  margin: 0px;
  background-color: transparent;
  transform: rotate(360deg);

  &::before {
    content: "";
    position: absolute;
    width: 2.1rem;
    height: 3px;
    border-radius: 3px;
    transition: 0.5s;
    transform: translateY(-9px);
  }
  &::after {
    content: "";
    position: absolute;
    width: 2.1rem;
    height: 3px;
    border-radius: 3px;
    transition: 0.5s;
    transform: translateY(9px);
  }
`;
