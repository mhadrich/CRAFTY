import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="text-center mt-4">
        <a
          href="https://twitter.com/?lang=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="lg" className="mx-2" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="lg" className="mx-2" />
        </a>
        <a
          href="https://www.instagram.com/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="lg" className="mx-2" />
        </a>
      </div>
      <div className="text-center mt-4">
        <p>
          @copyright 2023
          <span className="text-brightGreen px-2">CRAFTY</span>| All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
