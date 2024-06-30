import React from "react";
import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import image_1 from "./../assets/about-img-2.png";
import image_2 from "./../assets/about-img-1.png";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who are We?</h1>
        <p>
          AA in Nigeria offers support groups for individuals seeking recovery
          from alcoholism.
        </p>
        <Link to="/contact">
          {" "}
          <button className="btn">Contact</button>{" "}
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img className="img" src={image_1} alt="" />
          </div>
          <div className="img-stack bottom">
            <img className="img" src={image_2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
