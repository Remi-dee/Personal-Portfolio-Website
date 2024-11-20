import React from "react";
import RESUME from "../../Asset/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1ueSJEq_VPaLan--mnQmC2aEH63DnF4wjFUTpo_Lan20/edit?usp=sharing"
        target="_blank"
        className="btn"
      >
        Resume
      </a>
      <a href="#portfolio" className="btn btn-primary">
        Portfolio
      </a>
    </div>
  );
};

export default CTA;
