import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href={import.meta.env.VITE_LINKEDIN} target="_blank">
        <BsLinkedin />
      </a>
      <a href={import.meta.env.VITE_GITHUB} target="_blank">
        <BsGithub />
      </a>
      <a href={import.meta.env.VITE_TWITTER} target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
