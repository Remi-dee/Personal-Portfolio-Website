import React from "react";
import "./portfolio.css";
import IMG1 from "../../Asset/portfolio1.jpg";
import IMG2 from "../../Asset/portfolio2.jpg";
import IMG3 from "../../Asset/portfolio3.jpg";
import IMG4 from "../../Asset/portfolio4.jpg";
import IMG5 from "../../Asset/portfolio5.jpg";
import IMG6 from "../../Asset/portfolio6.jpg";

const data = [
  {
    id: 1,
    category: "Solo Project",
    image: IMG2,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20179884-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },

  /*{
    id: 2,
    category: "Solo Project",
    image: "",
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20179855-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },*/

  {
    id: 2,
    category: "Team Project",
    image: IMG4,
    title: "Orion UI kit for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20111348-Orion-UI-kit-for-Figma",
  },

  /*{
    id: 4,
    category: "Team Project",
    image: IMG5,
    title: "Figma dashboard UI kit for data design web apps",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20111287-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
  },*/

  /* {
    id: 5,
    category: "Archive Project",
    image: IMG6,
    title: "Orion UI kit for Figma",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/20111276-Orion-UI-kit-for-Figma",
  },*/

  {
    id: 3,
    category: "Archive Project",
    image: "https://res.cloudinary.com/dvwiiyev8/image/upload/v1681572853/Portfolio1.jpg",
    title: "Random Quote Generator",
    github: "https://github.com/Remi-dee/RandomQuoteGenerator/blob/main/README.md",
    demo:"https://remi-dee.github.io/RandomQuoteGenerator/",
  },
];

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, category, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <p className="portfolio__category">{category}</p>
              <div className="portfolio__item-image">
                <img
                  src={image}
                  alt="Image"
                />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn btn-dark"
                  target="_blank"
                >
                  Github Link
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portfolio;
