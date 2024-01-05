import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const experience = () => {
  return (
    <div className="experiences__container">
      <section id="experience">
        <h5>What i use</h5>
        <h2>Tech Stack</h2>

        <div className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>REACT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4> NEXT JS </h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>JAVASCRIPT</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>TAILWIND CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>VANILLA CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>BOOTSTRAP</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>SASS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>

          <div className="other__experiences">
            <h3>Backend </h3>
            <div className="experience__content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>NODE JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>EXPRESS JS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>MONGODB</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>FIREBASE</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>NEXT AUTH</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/******************************Other Experiences******************************* */}
      <section id="experience">
        <h5>What Else </h5>
        <h2>Can i do</h2>

        <div className="container experience__container experience2__container">
          <div className="experience__frontend">
            <h3>Other Skills</h3>
            <div className="experience__content experience2__content">
              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Proactiveness</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4> Natural Leader </h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Strong Problem Solving Skills</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Communication</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>

              <article className="experience_details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>Content Creation</h4>
                  <small className="text-light">Expert</small>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default experience;
