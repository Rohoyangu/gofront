import "./scss/index.scss";

import * as React from "react";
import abc from "../../images/abc.svg";
import america from "../../images/america.svg";
import bcd from "../../images/bcd.svg";
import cici from "../../images/cici.svg";
import jcb from "../../images/jcb.svg";
import maestro from "../../images/maestro.svg";
import master from "../../images/master.svg";
import visa from "../../images/visa.svg";
import { SocialMediaIcon } from "..";
import { SOCIAL_MEDIA } from "../../core/config";
import Nav from "./Nav";



const Footer: React.FC = () => (
  <div className="footer" id="footer">
    <div className="footer__favicons container">
      {SOCIAL_MEDIA.map(medium => (
        <SocialMediaIcon medium={medium} key={medium.ariaLabel} />
      ))}
    </div>

    <Nav />
      <div className="pay">PAYMENT METHOD</div>
      <div className=" container tra" >
      <img src={america}  height="28" />
      <img src={visa}  height="28" />
      <img src={master}  height="28" />
      <img src={maestro}  height="28" />
      <img src={bcd}  height="28" />
      <img src={jcb} height="28" /> 
      <img src={abc}  height="28" />
      <img src={cici}  height="28" />
  </div>
);

export default Footer;
