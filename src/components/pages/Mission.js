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
      <h1 className="grids" id="twoid">
          <span>WHO WE ARE </span></h1>
      <div className="firstgrid">
          <h2 className="grids" id="h3"> Tatiana Cardona </h2>
            <p className="grids"> Tatiana is a financial management professional and humanitarian aid practitioner with over 10 years of experience in creating business programs in South America and the U.S. Originally from Colombia, she moved to New York and received an MBA in Financial Management from Pace University. She now utilizes her expertise in finance, research management, and gender studies. She’s had first-hand experience with barriers and discrimination due to her accent, international education, and lack of social support. She’s passionate about ensuring every immigrant woman in New York City has access to opportunities on an equal level with their U.S.-born and male counterparts. </p>


           <h2 className="grids" id="h3"> Deniz Skantz </h2>
            <p className="grids"> Deniz is a marketing professional with over 5 years’ experience in digital marketing, advertising, and business. She moved to the U.S. from Istanbul, Turkey and then received an MBA in Marketing Management from Pace University. After having worked in the corporate sector, she recently decided to pursue a new career path and build skills in coding. </p>
          </div>
          <div className="outerrows">
          <h1 className="outerrows" id="twoid">
          <span>MISSION & OBJECTIVES </span></h1>
          <ul className="outerrows">
            <li>Alleviate the differences that exist between different classes, genders, and citizenship status </li>
            <li>Diminish the economic and social imbalances young women experience when trying to progress professionally and financially</li>
            <li>Help women identify their assets and aspirations, and strengthen the confidence of women wanting to advance their careers</li>
            <li>Increase the sustainability of immigrant-women-owned businesses by promoting collective entrepreneurship and inspiring business innovation </li>
            <li>Increase the number, quality, and sustainability of business run by women immigrants in NYC</li>
            <li>Break the stereotypes associated with immigrant and women-led businesses </li>
            <li>Develop the cultural competence of women in the workforce  </li>
            <li>Jumpstart a cycle of employment and fulfillment so the women can inspire and assist their families and communities  </li>
          </ul>
            </div>

    <Footer />
    </div>
  );
};
