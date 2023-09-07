import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { AnimatePresence, createDomMotionComponent } from "framer-motion";

const App = () => {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });

  // });

  // const hiddenElements = document.querySelectorAll(".hidden")
  // hiddenElements.forEach((e1) => observer.observe(e1))

  const motion = {
    div: createDomMotionComponent("div"),
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 0, y: 15 }}
          exist={{ opacity: 0, y: 15 }}
          transition={{ delay: 0.25 }}
        >
          <Header />
          <Nav />
          <About />
          <Experience />
          {/*<Services />*/}
          <Portfolio />
          {/*<Testimonials />*/}
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default App;
