import { useState, useContext } from "react";
import themeContext from "../../themeContext/themeContext";

import { FiMoon } from "react-icons/fi";
import { ImSun } from "react-icons/im";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

import {
  WebsiteHeader,
  Nav,
  LogoContainer,
  NavLinksContainer,
  NavLink,
  DarkModeBtn,
  HamburgerMenu,
  Bar,
  LogoImage,
} from "./styledComponents";

function Header() {
  const { isDarkMode, onToggleDarkMode } = useContext(themeContext);

  const [isMenuActive, setToggleMenu] = useState(false);

  const onToggleMenuActive = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <WebsiteHeader isDarkMode={isDarkMode}>
      <Nav>
        <LogoContainer>
          <a href="#hero" aria-label="logo">
            <LogoImage 
              src="https://img.freepik.com/free-vector/hand-coding-concept-illustration_114360-8193.jpg?ga=GA1.1.918559383.1745855273&semt=ais_hybrid&w=740" 
              alt="Developer Logo"
            />
          </a>
        </LogoContainer>
        <NavLinksContainer isDarkMode={isDarkMode} isMenuActive={isMenuActive}>
          <NavLink>
            <a href="#about">ABOUT</a>
          </NavLink>
          <NavLink>
            <a href="#projects">PROJECTS</a>
          </NavLink>
          {/* <NavLink>
            <a href="#blog">BLOG</a>
          </NavLink> */}
          {/* Dark Mode Switch */}
          <DarkModeBtn
            aria-label="darkMode"
            type="button"
            isDarkMode={isDarkMode}
            onClick={onToggleDarkMode}
          >
            {isDarkMode ? <ImSun /> : <FiMoon />}
          </DarkModeBtn>
        </NavLinksContainer>
        {/* Mobile Hamburger Menu */}

        <HamburgerMenu isDarkMode={isDarkMode} onClick={onToggleMenuActive}>
          {isMenuActive && (
            <Bar>
              <VscChromeClose />
            </Bar>
          )}
          {!isMenuActive && (
            <Bar>
              <RxHamburgerMenu />
            </Bar>
          )}
        </HamburgerMenu>
      </Nav>
    </WebsiteHeader>
  );
}

export default Header;
