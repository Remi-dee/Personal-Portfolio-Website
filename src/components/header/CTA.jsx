import React from "react";
import RESUME from "../../Asset/resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          RESUME
        }
        target="_blank"
        download
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
