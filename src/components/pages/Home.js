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
          Supporting Women gain financial independence putting an end to financial abuse.
          </p>
        </div>
        <NavLink to="/mission" className="navclass">
        <span>OUR MISSION</span>
      </NavLink>
      <p className="gridsint" >
      <img style={ imgStyle } src={require('../img/tatiana.jpg')} alt="Laptop"/>
      “Our Organization is valuable because its main focus is alleviate the differences that exist between different classes and genders and creates an environment where immigrant women feel they can and are able to use their hard and soft skills to create a better society that will benefit them, their families and their communities.” <span>– Tatiana Cardona, Executive Director </span>
      </p>
      </div>
      <Footer />
    </div>
  );
};