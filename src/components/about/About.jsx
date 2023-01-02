import React from 'react'
import './about.css'
import ME from "../../Asset/me_about.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {BsFolderCheck} from "react-icons/bs"

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className='about__me-image' >
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about-icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about-icon'/>
              <h5>Clents</h5>
              <small>3 clients</small>
            </article>

            <article className='about__card'>
              <BsFolderCheck className='about-icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio accusamus temporibus sint qui eveniet, excepturi beatae impedit sequi, vel facere amet. Eos nobis nihil rem officia sequi tempora voluptatum explicabo?
          </p>
          <a href="#contact" className='btn btn-primary' >Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about
