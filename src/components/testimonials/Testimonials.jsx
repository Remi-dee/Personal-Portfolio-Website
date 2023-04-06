import React from "react";
import "./testimonials.css";
import AVATAR1 from "../../Asset/avatar1.jpg";
import AVATAR2 from "../../Asset/avatar2.jpg";
import AVATAR3 from "../../Asset/avatar3.jpg";
import AVATAR4 from "../../Asset/avatar4.jpg";
import AVATAR5 from "../../Asset/avatar5.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVATAR1,
    name: "Reva Snow",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis reprehenderit, dolore quam magnam perspiciatis similique nulla esse unde. Quaerat aut magni inventore nisi tempora ullam eaque id mollitia eligendi.,",
  },

  {
    avatar: AVATAR2,
    name: "Monchi Lee",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis reprehenderit, dolore quam magnam perspiciatis similique nulla esse unde. Quaerat aut magni inventore nisi tempora ullam eaque id mollitia eligendi.,",
  },

  {
    avatar: AVATAR3,
    name: "Dave Raymond",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis reprehenderit, dolore quam magnam perspiciatis similique nulla esse unde. Quaerat aut magni inventore nisi tempora ullam eaque id mollitia eligendi.,",
  },

  {
    avatar: AVATAR4,
    name: "Charle Red",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis reprehenderit, dolore quam magnam perspiciatis similique nulla esse unde. Quaerat aut magni inventore nisi tempora ullam eaque id mollitia eligendi.,",
  },

  {
    avatar: AVATAR5,
    name: "Austin Daniel",
    review:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus debitis reprehenderit, dolore quam magnam perspiciatis similique nulla esse unde. Quaerat aut magni inventore nisi tempora ullam eaque id mollitia eligendi.,",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="container testimonials__container"
      >
        {data.map(({ avatar, name, review, index }) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
