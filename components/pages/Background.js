import React, { Component } from "react";
import Backgroundimg from '../img/pexels-photo.jpg';
import { NavBar } from "../elements/NavBar";

const sectionStyle = {
  width: "100%",
  height: "700px",
  opacity: "0.8",
  filter: "alpha(opacity=80)",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  position: "relative",
  top: "0px",
  left: "0px",
  zIndex: "0",
  backgroundPosition: "center",
  backgroundImage: `url(${Backgroundimg})`
};

const imgStyle = {
  width: '300px',
  height: '200px',
  position: 'relative',
  opacity: '1',
  filter: 'alpha(opacity=100)',
  top: '80px',
  maxWidth: '100%',
  zIndex: '1000',
  webkitFilter: 'brightness(120%)',
  filter: 'brightness(120%)',
  height: 'auto',
  paddingBottom: '100px',
}

export const Background = () => {
  return (
      <section style={ sectionStyle }>
      <NavBar />
      <img style={ imgStyle } src={require('../img/brighter_final.jpg')} alt="BT LOGO"/>
      <h2 className="outerbackground">
      Brighter Together, a non-profit New York City based company, provides counseling and coaching to foreign-born immigrant and head of household women who are early-stage company building entrepreneurs. Our program consists of career counseling, training and creating a network between our clients and external agents who could provide support to our clients until they feel comfortable to run their business on their own.
      </h2>

      </section>
    );
  };
