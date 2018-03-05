import React from "react";
import { Background } from "./Background";
import "./css/Home.css";
import { Mission } from "./Mission";
import { NavLink} from "react-router-dom";
import { Footer } from "../elements";


const imgStyle = {
  width: '200px',
  height: '200px',
  position: 'relative',
  filter: 'alpha(opacity=100)',
  maxWidth: '100%',
  zIndex: '1000',
  webkitFilter: 'brightness(120%)',
  filter: 'brightness(120%)',
  float: 'left'

}


export const Home = () => {
  return (
    <div className='home'>
    <Background />
      <div className="layout">
        <div className="outergrid">
          <p className="gridsing">
          Empowering immigrant women toward economic freedom and equity.
          </p>
        </div>
        <NavLink to="/mission" className="navclass">
        <span>WHO WE ARE</span>
      </NavLink>
        <NavLink to="/mission" className="navclass">
        <span>OUR MISSION</span>
        </NavLink>
      <p className="gridsint" >
      <img style={ imgStyle } src={require('../img/tatiana.jpg')} alt="Laptop"/>
      “Our Organization is valuable because its main focus is alleviate the differences that exist between different classes and genders and creates an environment where immigrant women feel they can and are able to use their hard and soft skills to create a better society that will benefit them, their families and their communities.” <span>– Tatiana Cardona </span>
      </p>
      </div>
      <Footer />
    </div>
  );
};
