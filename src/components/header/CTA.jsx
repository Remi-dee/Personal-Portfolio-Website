import React from "react";
import CV from "../../Asset/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href={
          import.meta.env.VITE_RESUME
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
