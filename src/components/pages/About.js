import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { NavBar } from "../elements";
import { Mission } from "./Mission";
import "./css/About.css";
import { Footer } from "../elements";


export const About = () => {
  return (
    <div className="layout">
      <div className="projes">
        <NavBar />
        <div className="outerrow">

            <h1 className="outerrow" id="twoid"> ABOUT US </h1>
            <h2 className="outerrow" id="threeid"> Brighter Together is an NYC-based nonprofit organization that dedicates our resources and expertise to improving the financial wellbeing of immigrant women. We want to create an empowering atmosphere where women can gain skills and confidence in business creation, financial literacy, and career advancement. We provide mentoring, counseling, specific program curriculums, networking opportunities, financial capital, and much more so that our clients can achieve financial independence, and contribute to the growth of their local economies.

            Brighter Together was founded by two immigrant women who have faced many of the barriers Brighter Together seeks to overcome. They believe that equality starts with economic freedom. Their goal is to transform the economic and social imbalances women experience, and begin building an infrastructure that allows immigrant women to have opportunities for a successful and healthy life. </h2>
            <br></br>
          </div>
          </div>
          <div className="firstgrids">
            <NavLink to="/mission" exact className="navclass" activeClassName="active">
              <span>WHO WE ARE</span>
            </NavLink>
            <NavLink to="/mission" exact className="navclass" activeClassName="active">
              <span>OUR MISSION</span>
            </NavLink>
            <h1 className="grids" id="h3"> Who do we aim to help? </h1>

            <p className="grids">We want to alieve the challenges especially afflicting immigrant women living in New York City. We are qualified to help women who are immigrants, head of their households, single moms, LGBTQ+ community, undocumented, new to the U.S., those with limited English proficiency, or those with no degree from a US educational institution. They are early-stage entrepreneurs who need guidance and resources to hone in on their skills, jumpstart their careers, and begin making the best future for themselves, their families, and their communities.</p>

            <h1 className="grids" id="h3"> What Makes Us Unique?</h1>
            <p className="grids">
              <ul className="grids">
                <li>We focus on immigrant women and the economic, social, and legal barriers they specifically face.</li>
                <li>We work to end societal and economic inequalities, while also empowering individual women to succeed.</li>
                <li>We coach work-life balance and self-care so women can make the most of their personal and professional lives.</li>
                <li>We introduce and prepare women for traditional and non-traditional work opportunities </li>
                <li>We answer the needs of specific groups, like single moms.</li>
                <li>We were founded by two women who have first-hand experience with overcoming barriers for immigrant women and business growth.</li>
              </ul>
            </p>

            <h1 className="grids" id="h3"> Barriers faced by immigrant women in NYC</h1>
            <p className="grids">
              <ul className="grids">
                <li>Language barrier</li>
                <li>Unfamiliarity with the legal system</li>
                <li>Limited access to information and support networks</li>
                <li>Unacceptance of foreign-earned degrees and education</li>
                <li>Startup costs for businesses or career pursuits</li>
                <li>Management of personal life, such as challenges for single moms</li>
                <li>Disability limitations</li>
                <li>Underrepresentation in managerial, professional, business-ownership, and other work with higher wages and stable income </li>
                <li>Subject to sexual harassment and other forms of financial or emotional exploitation</li>
              </ul>
            </p>

        </div>
        <Footer />
      </div>

  );
};
