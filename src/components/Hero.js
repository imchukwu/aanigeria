import React from "react";
import "./HeroStyles.css";
import bgImage from "../assets/bg-images.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="bg-image" src={bgImage} alt="" />
      </div>
      <div className="content">
        <p>Join us at</p>
        <h1>AA, Nigeria</h1>
        <div>
          <Link to="/meetings" className="btn">
            Meetings
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contacts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
