import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "@Asset/self.jpg";

import HeaderSocials from "./HeaderSocials";

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="me__avatar">
          <img src={ME} alt="Avatar One" />
        </div>

        <h5>Hello I'm </h5>
        <h1>Remi Daniel</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <HeaderSocials />
        <CTA />

        <a href="#contact" className="scroll__down">
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default header;
