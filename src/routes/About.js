import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
import Hero2 from "../components/Hero2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="ABOUT." text="Meeting schedules for AA Nigeria" />
      {/* <Company /> */}
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
