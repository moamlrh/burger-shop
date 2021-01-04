import {
  Facebook,
  GitHub,
  LocationOn,
  MailOutline,
  Phone,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import "./Footer.scss";
import logo from "../../images/logo2.png";

const Footer = () => {
  return (
    <div className="footer" id="CONTACT">
      <div className="information">
        <img src={logo} alt="logo" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className="icons">
          <Twitter />
          <Facebook />
          <GitHub />
        </div>
      </div>
      <div className="contact">
        <h1>Contact us</h1>
        <div className="items">
          <h3>
            <LocationOn />
            <span>Street name 1, City</span>
          </h3>

          <h3>
            <Phone />
            <span>+123 5476 789</span>
          </h3>

          <h3>
            <MailOutline />
            <span>email@company.com</span>
          </h3>

          <h3>
            <MailOutline />
            <span>email2@company.com</span>
          </h3>
        </div>
      </div>
      <div className="subscribe">
        <h2>Subscribe</h2>
        <input type="email" placeholder="Enter your email here..." />
        <button>SUBSCRIBE</button>
        <span>Get the latest special offers</span>
      </div>
    </div>
  );
};

export default Footer;
