import React from "react";
import { NavLink, Route } from "react-router-dom";
import { NavBar } from "../elements";
import { Switch} from "react-router-dom";
import "./css/About.css";
import { Footer } from "../elements";


const imgStyle = {
  width: '300px',
  height: '300px',
  position: 'relative',
  borderRadius: '50%',
  filter: 'alpha(opacity=100)',
  maxWidth: '100%',
  zIndex: '1000',
  webkitFilter: 'brightness(120%)',
  filter: 'brightness(120%)',
  height: 'auto',
}
export const Mission = () => {
  return (
    <div className="projects">
      <div className="proje">
      <NavBar />
      </div>
      <img style={ imgStyle } src={require('../img/laptop.jpg')} alt="Laptop"/>
    <div className="layout">
        <div className="outerrow">

          <h1 className="outerrow" id="twoid"> OUR MISSION </h1>
          <h2 className="outerrow" id="threeid"> Brighter Together creates an empowering atmosphere where immigrant women head of household have access to training, networking activities and financial capital that will help them start a successful career or with business creation according to their skills, talents and interests. We believe in equity and we are sure that if we transform the economic and social imbalances women experience, they can and will utilize their skills and talents to build a secure financial future. </h2>


          <h1 className="outerrow" id="twoid"> OUR VISION </h1>
          <h2 className="outerrow" id="threeid"> Alleviate the differences that exist between different classes and genders and creates an environment where immigrant women feel they can and are able to use their hard and soft skills to create a better society that will benefit them, their families and their communities. </h2>

        </div>
    </div>
    <Footer />
    </div>
  );
};
