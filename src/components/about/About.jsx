import React from "react";
import "./about.css";
import ME from "../../Asset/me_about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { BsFolderCheck } from "react-icons/bs";

const about = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>2 Years</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about-icon'/>
              <h5>Clents</h5>
              <small>3 clients</small>
            </article> */}

            <article className="about__card">
              <BsFolderCheck className="about-icon" />
              <h5>Projects</h5>
              <small>10 Completed</small>
            </article>
          </div>
          <p className="about_pitch">
            I am a sick ass frontend developer, I specialize in crafting
            innovative solutions that enhance user engagement and drive business
            success. With expertise in React and the MERN stack, I am passionate
            about creating intuitive user experiences and interactive web
            applications that solve complex problems. I'm committed to
            delivering exceptional results that exceed expectations. Aside from
            being a frontend developer, I'm passionate about personal growth and
            believe in the power of perseverance and consistency to achieve
            success. I set specific goals, prioritize them, and work diligently
            to accomplish them. When I'm not coding, I enjoy creating content
            for my fashion blog, where I help people improve their personal
            style. I also love staying active through weight lifting and
            practicing yoga, as I believe physical fitness is essential for
            maintaining a healthy body and mind. Most importantly, I value
            spending quality time with my loved ones.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
