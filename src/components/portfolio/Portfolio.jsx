import React from 'react'
import './portfolio.css'
import IMG1 from "../../Asset/portfolio1.jpg"
import IMG2 from "../../Asset/portfolio2.jpg"
import IMG3 from "../../Asset/portfolio3.jpg"
import IMG4 from "../../Asset/portfolio4.jpg"
import IMG5 from "../../Asset/portfolio5.jpg"
import IMG6 from "../../Asset/portfolio6.jpg"


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20179873-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },

  {
    id: 2,
    image: IMG2,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20179884-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
  },
  

    {
      id: 3,
      image: IMG3,
      title: "Figma dashboard UI kit for data design web apps",
      github: "https://github.com",
      demo: "https://dribbble.com/shots/20179855-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
    },
  
      
      {
        id: 4,
        image: IMG4,
        title: "Orion UI kit for Figma",
        github: "https://github.com",
        demo: "https://dribbble.com/shots/20111348-Orion-UI-kit-for-Figma"
      },
  
        
        {
          id: 5,
          image: IMG5,
          title: "Figma dashboard UI kit for data design web apps",
          github: "https://github.com",
          demo: "https://dribbble.com/shots/20111287-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps"
        },
  
          
          {
            id: 6,
            image: IMG6,
            title: "Orion UI kit for Figma",
            github: "https://github.com",
            demo: "https://dribbble.com/shots/20111276-Orion-UI-kit-for-Figma"
          }
          
  
  
  
          ]
  

const portfolio = () => {
  return (
    <section id='portfolio'>
     <h5>My Recent Works</h5>
     <h2>Portfolio</h2>
     <div className='container portfolio__container'>

     {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className='portfolio__item'>
       <div className='portfolio__item-image'>
         <img src={image} alt="" />
       </div>
       <h3>{title}</h3>
       <div className='portfolio__item-cta'>
       <a href={github} className='btn' target="_blank">
         Github
       </a>
       <a href={demo} className='btn btn-primary' target="_blank">
         Live Demo
       </a>
      </div>
     </article>
        )
      }
      
      
      )
     }
     </div>

    </section>
  )
}

export default portfolio
