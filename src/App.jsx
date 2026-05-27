import React from "react";
import Nav from "./components/nav/Nav";
import Hero from "./components/header/Header";
import About from "./components/about/About";
import WorkExperience from "./components/workexperience/WorkExperience";
import TechStack from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100">
      <Nav />
      <Hero />
      <About />
      <WorkExperience />
      <TechStack />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
