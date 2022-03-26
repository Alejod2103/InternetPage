import React, { useEffect } from "react";
import "./Header.css";
import Button from "../UI/Button/Button";
import "../UI/Button/Button.css";
import phoneHeader from "../../assets/phone-header-bg.png";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>El mejor servicio de Internet</span>
            <span> la mejor velocidad de internet gracias a la fibra optica</span>
          </h1>
          <p className="u-text-small">
            Disfruta el mejor servicio de internet mediante fibra optica al precio ideal para ti
          </p>
          <div className="header-cta">
            <Button text={"Llama Hoy"} btnClass={"btn-dark"} href={"#"} />
            <Button text={"¿Por que fibra?"} btnClass={"btn-light"} href={"/features"} />
          </div>
        </div>
        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
        </div>
      </div>
      <div className="floating-icon">
        <a href="#features">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
