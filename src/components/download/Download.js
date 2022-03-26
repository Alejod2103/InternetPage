import React, { useEffect } from "react";
import "./Download.css";
import { FaApple, FaWindows } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";
import { IconContext } from "react-icons";
import AOS from "aos";
import "aos/dist/aos.css";

const Download = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="download">
      <div className="container download" data-aos="fade-up">
        <h2>Compatible en todas las platafomas</h2>
        <p className="u-text-small">
          Disfruta de Stream Play TV en todos tus dispositivos
        </p>
        <IconContext.Provider value={{ size: "15" }}>
          <div className="download-icons">
            <div className="download-icon">
              <FaApple /> <p>ios</p>
            </div>
            <div className="download-icon">
              <GrAndroid /> <p>Android</p>
            </div>
            <div className="download-icon">
              <FaWindows /> <p>Windows</p>
            </div>
          </div>
        </IconContext.Provider>
      </div>
    </section>
  );
};

export default Download;
