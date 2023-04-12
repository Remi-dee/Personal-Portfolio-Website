import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/remi-daniel247" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/Remi-dee" target="_blank">
        <BsGithub />
      </a>
      <a href="https://twitter.com/_remidee_" target="_blank">
        {" "}
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
