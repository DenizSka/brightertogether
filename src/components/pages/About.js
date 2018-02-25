import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { NavBar } from "../elements";
import { Mission } from "./Mission";
import "./css/About.css";
import { Footer } from "../elements";


export const About = () => {
  return (
    <div className="layout">
      <div className="proje">
        <NavBar />
      </div>
        <div className="outerrow">
          <div className="firstgrid">
            <h1 className="grids" id="gridsthree"> ABOUT US  </h1>
            <p className="grids"> Brighter Together team, founded by two foreign born women, experienced the same barriers throughout their careers and that’s why, we as immigrant women workers want to break this pattern.

            We know that if we give proper training about Finance, Marketing and life skills, women will be more empowered to succeed in their professional careers or in the path to starting their own businesses. While we recognize and diligently work to revolutionize the economic and social inequities faced by women business owners, we also stand firm in our belief that being a woman and an entrepreneur can mutually coexist.
            We dedicate our resources and expertise to improve the financial wellbeing of
            immigrant (foreign-born) women who reside in New York City (NYC) and are primarily the head of their households.</p>
            <NavLink to="/mission" exact className="navclass" activeClassName="active">
              <span>OUR MISSION</span>
            </NavLink>
            <h1 className="grids" id="h3"> OUR GOAL </h1>

            <p className="grids">Brighter Together goal is to increase the number, quality and sustainability of businesses created and run by female immigrant head of households in NYC, as well as give the necessary career advancement tools to those that don’t want to pursue entrepreneurship so they can start successful careers in their field of interests according with their skills and abilities.</p>

            <h1 className="grids" id="h3"> OBJECTIVES</h1>
            <p className="grids">We will reach our goal by creating a safe, innovative and empowering environment for potential entrepreneurs where they can identify their assets and aspirations through coaching and trainings; build strong and lasting bonds with other entrepreneurs, and connect with resources and services available to them. We will also create partnerships with other agencies and private companies so the women that are not interested in entrepreneurship can develop a successful career.
              We are determined to break the stereotypes associated with immigrant and female-led business:
              In terms of business type: We will provide an innovative platform where women can dream and design businesses beyond the traditional type such as baby-sitting and cleaning.
              In terms of capacity: We will provide career coaching in addition to managerial and financial trainings which will increase our clients’ access to capital and the scalability of their businesses. According to a NYC research women-owned business lag behind those led by men in scaling up which is associated with risk-averseness, lack of credit and access to capital.
              In terms of sustainability: By bringing like-minded entrepreneurs together and promoting collective entrepreneurship we will improve the social and business support network of our clients which will lead to improved sustainability and continuous business innovation --according to a recent Harvard Business Review study “individualism” in entrepreneurship is affecting business sustainability negatively. </p>
        </div>
        </div>
      </div>

  );
};
