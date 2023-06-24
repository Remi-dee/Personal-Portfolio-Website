import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Daniel Remi
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
        <li>
          <a href="#Experience">Experience</a>
        </li>
        {/*<li><a href="#Services">Services</a></li>*/}
        <li>
          <a href="#Portfolio">Portfolio</a>
        </li>
        {/*<li><a href="#Testimonials">Testimonials</a></li>*/}
        <li>
          <a href="#Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href={import.meta.env.VITE_TWITTER} target="_blank">
          <IoLogoTwitter />
        </a>
        <a href={import.meta.env.VITE_LINKEDIN} target="_blank">
          <BsLinkedin />
        </a>
        <a href={import.meta.env.VITE_INSTAGRAM} target="_blank">
          <FiInstagram />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Remi Daniel Aluko. All right reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
