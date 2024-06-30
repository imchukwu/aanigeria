import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer2";
import Hero2 from "../components/Hero2";
import Title from "../components/Title";
import ContactForm from "../components/ContactContent";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Hero2 heading="CONTACT." text="Reachout so we can support" />
      <Title subTitle="Contact Us" title="" />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;
