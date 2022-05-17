import React from "react";
import "./Footer.css";
import img1 from "./logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h1>About us</h1>
        <p>High quality is our first priority</p>
        <p>
          Copyright 2022 <CopyrightIcon />
          <span style={{ marginLeft: "6px" }}>Bhavesh</span>
        </p>
      </div>
      <div>
        <img src={img1} alt="logo" />
      </div>
      <div>
        <h1>Contact US</h1>
        <ul type="none">
          <li>
            <InstagramIcon color="inherit" />
            <span>Instagram</span>
          </li>
          <li>
            <LinkedInIcon color="primary" />
            <span>LinkedIn</span>
          </li>
          <li>
            <FacebookIcon color="primary" />
            <span>FaceBook</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
