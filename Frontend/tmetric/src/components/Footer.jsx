import React from "react";
import "../Styles/footer.css";
import { Heading } from "@chakra-ui/react";

import { SiApple } from "react-icons/si";
import { ImAndroid, ImChrome } from "react-icons/im";
import { SiLinkedin, SiYoutube } from "react-icons/si";
import {
  FaFirefox,
  FaOpera,
  FaEdge,
  FaSafari,
  FaDesktop,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";


// Reviewed for: you can use loops for rendering list if possible
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-logo">
          <img
            src="https://app.tmetric.com/images/tmetric_logo_and_text.svg"
            alt=""
          />
        </div>
        <div className="footer-element">
          <ul>
            <Heading size={"xs"}>Applications</Heading>
            <li>
              <FaDesktop className="footer-icon" />
              Desktop
            </li>
            <li>
              <SiApple className="footer-icon" /> iOS
            </li>
            <li>
              <ImAndroid className="footer-icon" />
              Android
            </li>
          </ul>
          <ul>
            <Heading size={"xs"}>Browser Extensions</Heading>
            <li>
              <ImChrome className="footer-icon" /> Chrome
            </li>
            <li>
              <FaFirefox className="footer-icon" /> Firefox
            </li>
            <li>
              <FaOpera className="footer-icon" /> Opera
            </li>
            <li>
              <FaEdge className="footer-icon" /> Edge
            </li>
            <li>
              <FaSafari className="footer-icon" /> Safari
            </li>
          </ul>
          <ul>
            <Heading size={"xs"}>Resources</Heading>
            <li>Solutions</li>
            <li>Integrations</li>
            <li>Help</li>
            <li>Time Trackers Comparison</li>
            <li>Blog</li>
          </ul>
          <ul>
            <Heading size={"xs"}>About</Heading>
            <li>About TMetric</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </div>
      </footer>
      <div className="footer-social">
        <a href="https://www.facebook.com/tmetrictimer/">
          {" "}
          <FaFacebookSquare className="footer-icon" />
        </a>
        <a href="https://twitter.com/TMetric_Timer">
          <FaTwitter className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/showcase/tmetric/">
          <SiLinkedin className="footer-icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCPmbWbH2xUKdmVwVcQMOxaw">
          <SiYoutube className="footer-icon" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
