import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer2";
import Company from "../components/Company";
import QuizWithPreamble from "../components/QuizWithPreamble";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Company />
      <QuizWithPreamble />
      <Footer />
    </div>
  );
};

export default Home;
