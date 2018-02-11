import React from "react";
import "./css/Footer.css";

export const Footer = () => {
  return (
    <div className="footer-nav">
      <nav id="footer-navigation">
        <div className="nav">
          <ul className='cf'>
            <li className='cf'>
                © BTNY 2018 | <a className= "cf" href="mailto:info@brightertogether.org">Contact us</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
