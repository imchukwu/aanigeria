import React from "react";
import "./Footer2.css";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <p>©2024 Alcoholics Anonymous (AA) Nigeria. All rights reserved.</p>
      <ul>
        <li>Terms of Services</li>
        <li>Privacy Policy</li>
        <li>
          <div className="social">
            <FaFacebook
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={20}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
