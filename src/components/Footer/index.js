import { MdEmail } from "react-icons/md";
import { TfiTwitterAlt } from "react-icons/tfi";
import { useContext } from "react";

import { BsGithub, BsLinkedin } from "react-icons/bs";

import themeContext from "../../themeContext/themeContext";

import {
  FooterContainer,
  Email,
  FooterSocials,
  CopyRight,
} from "./styledComponents";

function Footer() {
  const { isDarkMode } = useContext(themeContext);
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContainer isDarkMode={isDarkMode}>
      <Email>
        <MdEmail
          style={{
            fontSize: "1.1rem",
            fontWeight: "bolder",
            marginRight: "5px",
          }}
        />
        <a href="mailto:sanojtindu@gmail.com">sanojtindu@gmail.com</a>
      </Email>
      <FooterSocials>
        <a
          aria-label="twitter"
          href="https://x.com/sanojtindu06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TfiTwitterAlt
            color="#1d9bf0"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          aria-label="github"
          href="https://github.com/SanojS31"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/sanoj-s/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin
            color="#0366c3"
            style={{
              fontSize: "45px",
              transition: "all 0.3s ease-in-out",
              padding: "8px",
            }}
          />
        </a>
      </FooterSocials>
      <CopyRight>
        Copyright {year} © Sanoj S - All Right Reserved.
      </CopyRight>
    </FooterContainer>
  );
}

export default Footer;
