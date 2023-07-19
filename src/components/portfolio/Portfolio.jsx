import React from "react";
import "./portfolio.css";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { data } from "./data";

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
        >
          {data
            .slice(3, 5)
            .map(({ id, category, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio__item">
                  <p className="portfolio__category">{category}</p>
                  <div className="portfolio__item-image">
                    <img src={image} alt="Image" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn btn-dark" target="_blank">
                      Github Link
                    </a>
                    {demo && (
                      <a
                        href={demo}
                        className="btn btn-primary"
                        target="_blank"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
        </Carousel>
      </div>

      <div className="container portfolio__container">
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
        >
          {data
            .slice(0, 4)
            .map(({ id, category, image, title, github, demo }) => {
              return (
                <article key={id} className="portfolio__item">
                  <p className="portfolio__category">{category}</p>
                  <div className="portfolio__item-image">
                    <img src={image} alt="Image" />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={github} className="btn btn-dark" target="_blank">
                      Github Link
                    </a>
                    <a href={demo} className="btn btn-primary" target="_blank">
                      Live Demo
                    </a>
                  </div>
                </article>
              );
            })}
        </Carousel>
      </div>

      {/* <div className="container portfolio__container">
        <Carousel
           autoPlay
           infiniteLoop
           showStatus={false}
           showIndicators={true}
           showThumbs={false}
           interval={5000}
        >
          {data.slice(5, data.length).map(({ id, category, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <p className="portfolio__category">{category}</p>
                <div className="portfolio__item-image">
                  <img src={image} alt="Image" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn btn-dark" target="_blank">
                    Github Link
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </Carousel>
      </div> */}
    </section>
  );
};

export default portfolio;
