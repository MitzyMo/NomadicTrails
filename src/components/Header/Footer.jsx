import React from "react";
import Logo from "../Brand/Logo";
import "../../assets/styles/styles.css";
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { TfiInstagram } from "react-icons/tfi";

//Componente contenedor
const Footer = () => {
  return (
    <>
      <footer className="container-fluid fixed-bottom deep-teal-blue white">
        <div className="row align-items-center">
          <div className="col-1 col-sm-1 col-md-1 col-lg-1">
            <Logo size={40} alt="Mo's Logo" />
          </div>
          <div className="col-9 col-sm-9 col-md-9 col-lg-9 flex-start ">
            © 2024 <a href="#">Mo's Nomadic Trails™</a> . All Rights Reserved.
          </div>
          <div className="col-2 col-sm-2 col-md-2 col-lg-2">
            <a aria-label="Instagram" className="white icon-spacing"
              href="https://www.instagram.com/mercymolano?utm_source=qr" target="_blank">
              <TfiInstagram /></a>
            <a aria-label="Whatsapp" className="white icon-spacing" href="https://wa.link/ycoea4"
              target="_blank">
              <FaWhatsapp /></a>
            <a aria-label="LinkedIn" className="white icon-spacing"
              href="https://co.linkedin.com/in/mercymoreno" target="_blank">
              <CiLinkedin /></a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
