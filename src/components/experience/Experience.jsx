import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from "react-icons/bs"

const experience = () => {
  return (
    <section id='experience'>
      <h5>What Can I Do</h5>
      <h2>Skills</h2>
     
      <div className='container experience__container'>
        <div className='experience__frontend'>
          <h3>Frontend Development</h3>
          <div className='experience__content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
             <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>SASS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>REACT</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>
        </div>
      

        <div className='other__experiences'>
        <h3>Others</h3>
          <div className='experience__content'>
            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>FASHION CONSULT</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>FASHION BLOGGING</h4>
               <small className='text-light'>Experienced</small>
              </div>
              </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>CONTENT CREATION</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>CANVA DESIGN</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience_details'>
            <BsPatchCheckFill className='experience__details-icon' />
              <div>
               <h4>PHOTOGRAPHY</h4>
               <small className='text-light'>Experienced</small>
              </div>
            </article>

          
        </div>

      </div>
      </div>
  </section>
  )
}

export default experience
