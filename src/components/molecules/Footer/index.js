import React from "react";
import { Logo, Germany } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="social-wrapper">
          <Icon img={Germany} />
          <Icon img={Germany} />
          <Icon img={Germany} />
          <Icon img={Germany} />
        </div>
      </div>
      <div className="copyraight">
        <p>copyraite</p>
      </div>
    </div>
  );
};

export default Footer;
